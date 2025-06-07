import type { Handler } from '@netlify/functions'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  let stripeEvent: Stripe.Event

  try {
    const sig = event.headers['stripe-signature']!
    stripeEvent = stripe.webhooks.constructEvent(event.body!, sig, endpointSecret)
  } catch (err) {
    console.log(`⚠️  Webhook signature verification failed.`, err)
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Webhook signature verification failed' }),
    }
  }

  try {
    switch (stripeEvent.type) {
      case 'customer.subscription.created':
      case 'customer.subscription.updated': {
        const subscription = stripeEvent.data.object as Stripe.Subscription
        await handleSubscriptionChange(subscription)
        break
      }
      
      case 'customer.subscription.deleted': {
        const subscription = stripeEvent.data.object as Stripe.Subscription
        await handleSubscriptionCancellation(subscription)
        break
      }
      
      case 'invoice.payment_succeeded': {
        const invoice = stripeEvent.data.object as Stripe.Invoice
        await handlePaymentSucceeded(invoice)
        break
      }
      
      case 'invoice.payment_failed': {
        const invoice = stripeEvent.data.object as Stripe.Invoice
        await handlePaymentFailed(invoice)
        break
      }
      
      default:
        console.log(`Unhandled event type ${stripeEvent.type}`)
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    }
  } catch (error) {
    console.error('Error processing webhook:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    }
  }
}

async function handleSubscriptionChange(subscription: Stripe.Subscription) {
  console.log('Processing subscription change:', subscription.id)
  
  const customerId = subscription.customer as string
  const status = subscription.status
  
  // Get customer email from Stripe
  const customer = await stripe.customers.retrieve(customerId) as Stripe.Customer
  const email = customer.email
  
  if (!email) {
    console.error('No email found for customer:', customerId)
    return
  }
  
  // Update user subscription status
  const { error } = await supabase
    .from('users')
    .update({
      subscription_status: status === 'active' ? 'active' : status,
      stripe_customer_id: customerId,
      stripe_subscription_id: subscription.id,
      updated_at: new Date().toISOString()
    })
    .eq('email', email)
  
  if (error) {
    console.error('Error updating user subscription:', error)
  } else {
    console.log('Updated subscription for user:', email)
  }
}

async function handleSubscriptionCancellation(subscription: Stripe.Subscription) {
  console.log('Processing subscription cancellation:', subscription.id)
  
  const { error } = await supabase
    .from('users')
    .update({
      subscription_status: 'cancelled',
      updated_at: new Date().toISOString()
    })
    .eq('stripe_subscription_id', subscription.id)
  
  if (error) {
    console.error('Error updating subscription cancellation:', error)
  }
}

async function handlePaymentSucceeded(invoice: Stripe.Invoice) {
  console.log('Processing successful payment:', invoice.id)
  
  if (invoice.subscription) {
    // Ensure subscription is marked as active
    const { error } = await supabase
      .from('users')
      .update({
        subscription_status: 'active',
        updated_at: new Date().toISOString()
      })
      .eq('stripe_subscription_id', invoice.subscription)
    
    if (error) {
      console.error('Error updating payment success:', error)
    }
  }
}

async function handlePaymentFailed(invoice: Stripe.Invoice) {
  console.log('Processing failed payment:', invoice.id)
  
  if (invoice.subscription) {
    // Mark subscription as past_due
    const { error } = await supabase
      .from('users')
      .update({
        subscription_status: 'past_due',
        updated_at: new Date().toISOString()
      })
      .eq('stripe_subscription_id', invoice.subscription)
    
    if (error) {
      console.error('Error updating payment failure:', error)
    }
  }
}