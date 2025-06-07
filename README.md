# PflegeHelp - KI-gestützte Pflegeausbildung

Eine vollständige React/TypeScript Webanwendung für die Pflegeausbildung mit KI-Features, Stripe-Integration und 7-Tage Trial.

## Features

- **Fallbeispiel Generator**: Realistische Fallbeispiele für verschiedene Pflegebereiche
- **Pflegeplanung Workflow**: Systematische Pflegepläne nach NANDA-I Klassifikation
- **PESR Generator**: Strukturierte PESR-Pflegediagnosen
- **SMART-Ziel Assistent**: Präzise Pflegeziele nach SMART-Kriterien
- **Pflegeinfo Workflow**: Bewertung und Optimierung von Pflegeinformationen

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS
- **State Management**: Zustand
- **Routing**: React Router
- **Auth & Database**: Supabase
- **Payments**: Stripe (7-Tage Trial)
- **AI**: OpenAI API
- **Backend**: Netlify Functions
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Setup

### 1. Environment Variables

Kopieren Sie `.env.local.example` zu `.env.local` und setzen Sie die folgenden Variablen:

```bash
# Supabase
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Stripe (TEST KEYS!)
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_51...
STRIPE_SECRET_KEY=sk_test_51...
VITE_STRIPE_PRICE_ID_MONTHLY=price_1...monthly
VITE_STRIPE_PRICE_ID_YEARLY=price_1...yearly

# OpenAI
VITE_OPENAI_API_KEY=sk-proj-...

# App Settings
VITE_APP_URL=http://localhost:3000
VITE_MONTHLY_PRICE=29.99
VITE_YEARLY_PRICE=299.99
VITE_TRIAL_DAYS=7
```

### 2. Supabase Setup

Führen Sie folgende SQL-Befehle in Ihrem Supabase-Projekt aus:

```sql
-- Users table (extends Supabase auth.users)
CREATE TABLE users (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT NOT NULL,
  name TEXT NOT NULL,
  subscription_status TEXT DEFAULT 'trial' CHECK (subscription_status IN ('trial', 'active', 'expired', 'cancelled')),
  trial_ends_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() + INTERVAL '7 days',
  stripe_customer_id TEXT UNIQUE,
  stripe_subscription_id TEXT,
  payment_method_added BOOLEAN DEFAULT FALSE,
  usage_count_case_generation INTEGER DEFAULT 0,
  usage_count_care_plan INTEGER DEFAULT 0,
  usage_count_care_info INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Cases table
CREATE TABLE cases (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  case_type TEXT NOT NULL CHECK (case_type IN ('fallbeispiel', 'pflegeplanung', 'pesr', 'smart_ziel', 'pflegeinfo')),
  ai_response TEXT,
  ai_feedback JSONB,
  care_infos JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Usage tracking
CREATE TABLE usage_tracking (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  feature_type TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS Policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE usage_tracking ENABLE ROW LEVEL SECURITY;

-- Users policies
CREATE POLICY "Users can view own profile" ON users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON users FOR UPDATE USING (auth.uid() = id);

-- Cases policies
CREATE POLICY "Users can view own cases" ON cases FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create own cases" ON cases FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own cases" ON cases FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own cases" ON cases FOR DELETE USING (auth.uid() = user_id);

-- Usage tracking policies
CREATE POLICY "Users can view own usage" ON usage_tracking FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create own usage" ON usage_tracking FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Helper functions
CREATE OR REPLACE FUNCTION is_trial_active(user_uuid UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM users
    WHERE id = user_uuid
    AND (subscription_status = 'active' OR (subscription_status = 'trial' AND trial_ends_at > NOW()))
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION increment_usage_count(user_uuid UUID, column_name TEXT)
RETURNS VOID AS $$
BEGIN
  EXECUTE format('UPDATE users SET %I = %I + 1, updated_at = NOW() WHERE id = $1', column_name, column_name)
  USING user_uuid;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

### 3. Stripe Setup

1. Erstellen Sie Produkte und Preise in Stripe Dashboard
2. Kopieren Sie die Price IDs in Ihre Environment Variables
3. Konfigurieren Sie Webhooks für Subscription Events
4. Verwenden Sie Test-Kreditkarten für Development:
   - Erfolgreiche Zahlung: `4242 4242 4242 4242`
   - Abgelehnte Zahlung: `4000 0000 0000 0002`

### 4. Installation & Start

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Build für Production
npm run build

# Linting
npm run lint
```

## Deployment

### Netlify Deployment

1. Verbinden Sie Ihr GitHub Repository mit Netlify
2. Setzen Sie alle Environment Variables im Netlify Dashboard
3. Die App wird automatisch deployed mit:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
   - Functions Directory: `netlify/functions`

### Wichtige Einstellungen

- Node Version: 18
- Alle Environment Variables müssen gesetzt werden
- Stripe Webhook URL: `https://yourapp.netlify.app/.netlify/functions/stripe-webhook`

## Testing

### Test Scenarios

1. **Registrierung**: User registriert sich → Stripe Checkout → 7-Tage Trial
2. **KI-Features**: Alle AI-Tools testen mit verschiedenen Eingaben
3. **Trial-to-Paid**: Nach 7 Tagen automatische Konvertierung
4. **Subscription Management**: Stripe Customer Portal

### Test Daten

Verwenden Sie Stripe Test-Kreditkarten und echte E-Mail-Adressen für Supabase Auth.

## Lizenz

Dieses Projekt wurde für PflegeHelp entwickelt. Alle Rechte vorbehalten.