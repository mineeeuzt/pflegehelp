-- Nur die fehlenden Policies erstellen
-- (Überspringen Sie die bereits existierenden)

-- Check welche Policies bereits existieren:
SELECT policyname FROM pg_policies WHERE tablename = 'users';

-- Dann nur diese erstellen falls sie NICHT existieren:

-- 1. Falls "Users can read own profile" NICHT existiert:
CREATE POLICY "Users can read own profile" ON users
  FOR SELECT USING (auth.uid() = id);

-- 2. Falls "Users can insert own profile" NICHT existiert:  
CREATE POLICY "Users can insert own profile" ON users
  FOR INSERT WITH CHECK (auth.uid() = id);

-- 3. Falls "Service role can manage all users" NICHT existiert:
CREATE POLICY "Service role can manage all users" ON users
  FOR ALL USING (auth.role() = 'service_role');

-- 4. RLS aktivieren (falls nicht schon aktiv):
ALTER TABLE users ENABLE ROW LEVEL SECURITY;