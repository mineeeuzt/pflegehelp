# KOMPLETTE SETUP CHECKLISTE - PflegeHelp

## 1. SUPABASE KONFIGURATION

### Dashboard: https://supabase.com/dashboard/projects → pflegehelp Projekt

#### A) Settings > API
- **Site URL**: `https://aquamarine-hummingbird-b63293.netlify.app`
- **WICHTIG**: Nicht localhost!

#### B) Authentication > URL Configuration
- **Redirect URLs** hinzufügen:
  - `https://aquamarine-hummingbird-b63293.netlify.app/**`
  - `https://aquamarine-hummingbird-b63293.netlify.app/dashboard`
  - `https://aquamarine-hummingbird-b63293.netlify.app/subscription`

#### C) Authentication > Settings
- **Enable email confirmations**: AN
- **Secure email change**: AN

#### D) SQL Editor
```sql
-- Users Tabelle prüfen (sollte existieren):
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  email TEXT NOT NULL,
  name TEXT NOT NULL,
  subscription_status TEXT DEFAULT 'trial',
  trial_ends_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Trigger prüfen (sollte existieren):
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.users (id, email, name, subscription_status, trial_ends_at)
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data->>'name', 'User'),
    'trial',
    NOW() + INTERVAL '7 days'
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

## 2. STRIPE KONFIGURATION

### Dashboard: https://dashboard.stripe.com

#### A) Test Mode aktivieren (oben rechts)

#### B) Products erstellen
- **Name**: PflegeHelp Monatlich
- **Preis**: €19.99/Monat
- **Price ID kopieren**: `price_1RXM4QCdcLuUUaQSrPem8NJi`

#### C) Webhooks
- **Endpoint URL**: `https://aquamarine-hummingbird-b63293.netlify.app/.netlify/functions/stripe-webhook`
- **Events**:
  - `customer.subscription.created`
  - `customer.subscription.updated`
  - `customer.subscription.deleted`
  - `invoice.payment_succeeded`
  - `invoice.payment_failed`

#### D) API Keys kopieren
- **Publishable Key**: `pk_test_...`
- **Secret Key**: `sk_test_...`
- **Webhook Secret**: `whsec_...`

## 3. NETLIFY KONFIGURATION

### Dashboard: https://app.netlify.com → aquamarine-hummingbird-b63293

#### A) Environment Variables (Site settings > Environment variables)
```
VITE_SUPABASE_URL=https://qpdctssrpodwinaawfghm.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
VITE_APP_URL=https://aquamarine-hummingbird-b63293.netlify.app
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
OPENAI_API_KEY=sk-proj-...
```

#### B) Build Settings
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Functions directory**: `netlify/functions`

#### C) Redirects (_redirects file sollte existieren)
```
/*    /index.html   200
```

## 4. GITHUB REPOSITORY

### Settings > Secrets and variables > Actions
- Alle Environment Variables auch hier hinzufügen (falls CI/CD verwendet wird)

## 5. TEST WORKFLOW

### A) Registrierung testen
1. Gehe zu: `https://aquamarine-hummingbird-b63293.netlify.app/register`
2. Registriere neuen User
3. Prüfe E-Mail
4. Klicke Bestätigungslink
5. Sollte zu `/subscription` weiterleiten
6. Stripe Checkout sollte öffnen

### B) Stripe Test
- **Test Karte**: `4242 4242 4242 4242`
- **Ablauf**: 12/34
- **CVC**: 123

### C) Nach Zahlung
- User sollte zu `/dashboard` weitergeleitet werden
- Subscription Status sollte `active` sein

## 6. HÄUFIGE PROBLEME

### "Failed to fetch"
- Environment Variables in Netlify prüfen
- Keine Leerzeichen in URLs!

### "Email not confirmed"
- Supabase Site URL prüfen
- Redirect URLs korrekt konfiguriert?

### Stripe Error
- Test Mode aktiviert?
- Webhook Endpoint erreichbar?
- Korrekte Price ID?

## 7. LOGS PRÜFEN

### Netlify Functions
- Netlify Dashboard > Functions > Logs

### Supabase
- Supabase Dashboard > Logs

### Stripe
- Stripe Dashboard > Logs

---

**WICHTIG**: Alle URLs müssen EXAKT `https://aquamarine-hummingbird-b63293.netlify.app` sein - kein localhost, keine Tippfehler!