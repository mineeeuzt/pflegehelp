# DRINGEND: Supabase Site URL konfigurieren

## Problem
Der Bestätigungslink geht zu `localhost` statt zur Netlify-URL!

## SOFORTIGE LÖSUNG:

1. **Gehen Sie JETZT zu**: https://supabase.com/dashboard/projects
2. **Wählen Sie Ihr pflegehelp Projekt**
3. **Gehen Sie zu**: Settings > API
4. **Unter "Configuration"** ändern Sie:
   - **Site URL**: `https://aquamarine-hummingbird-b63293.netlify.app`
   
5. **Gehen Sie zu**: Authentication > URL Configuration
6. **Fügen Sie hinzu**:
   - **Redirect URLs**: `https://aquamarine-hummingbird-b63293.netlify.app/**`

## Dann testen Sie erneut!

Das ist der Grund warum der Link zu localhost geht - Supabase hat die falsche Site URL gespeichert!