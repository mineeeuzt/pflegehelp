-- Enable RLS for cases table
ALTER TABLE cases ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any
DROP POLICY IF EXISTS "Users can view own cases" ON cases;
DROP POLICY IF EXISTS "Users can create own cases" ON cases;
DROP POLICY IF EXISTS "Users can update own cases" ON cases;
DROP POLICY IF EXISTS "Users can delete own cases" ON cases;

-- Policy: Users can view their own cases
CREATE POLICY "Users can view own cases" ON cases
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Policy: Users can create cases
CREATE POLICY "Users can create own cases" ON cases
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Policy: Users can update their own cases
CREATE POLICY "Users can update own cases" ON cases
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Policy: Users can delete their own cases
CREATE POLICY "Users can delete own cases" ON cases
FOR DELETE
TO authenticated
USING (auth.uid() = user_id);

-- Ensure cases table has correct structure
-- Add user_id column if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'cases' 
                   AND column_name = 'user_id') THEN
        ALTER TABLE cases ADD COLUMN user_id UUID REFERENCES auth.users(id);
    END IF;
END $$;

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_cases_user_id ON cases(user_id);