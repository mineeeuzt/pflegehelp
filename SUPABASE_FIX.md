# SOFORTIGE LÖSUNG: Supabase Redirect URL konfigurieren

## Problem
Safari kann keine Verbindung zum Server aufbauen, weil die Redirect URL nicht in Supabase konfiguriert ist.

## LÖSUNG (JETZT MACHEN):

1. **Gehen Sie zu Supabase Dashboard**: https://supabase.com/dashboard/projects
2. **Wählen Sie Ihr Projekt** (pflegehelp)
3. **Gehen Sie zu**: Authentication > URL Configuration
4. **Fügen Sie diese URLs hinzu**:
   - Site URL: `https://aquamarine-hummingbird-b63293.netlify.app`
   - Redirect URLs: 
     - `https://aquamarine-hummingbird-b63293.netlify.app/email-confirmation`
     - `https://aquamarine-hummingbird-b63293.netlify.app/dashboard`
     - `http://localhost:5173/email-confirmation` (für Development)

## Dann teste ich eine einfachere Lösung ohne custom redirect