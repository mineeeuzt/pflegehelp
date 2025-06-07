-- SUPABASE RLS POLICIES FIX
-- Führen Sie diesen Code im Supabase SQL Editor aus

-- 1. RLS für users Tabelle aktivieren (falls nicht aktiv)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- 2. Policy: User kann sein eigenes Profil lesen
CREATE POLICY "Users can read own profile" ON users
  FOR SELECT 
  USING (auth.uid() = id);

-- 3. Policy: User kann sein eigenes Profil aktualisieren  
CREATE POLICY "Users can update own profile" ON users
  FOR UPDATE 
  USING (auth.uid() = id);

-- 4. Policy: Neuer User kann sich selbst erstellen
CREATE POLICY "Users can insert own profile" ON users
  FOR INSERT 
  WITH CHECK (auth.uid() = id);

-- 5. Policy: Service Role kann alles (für Webhooks)
CREATE POLICY "Service role can manage all users" ON users
  FOR ALL 
  USING (auth.role() = 'service_role');

-- 6. Existing policies löschen falls Konflikte
DROP POLICY IF EXISTS "Enable read access for authenticated users" ON users;
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON users;