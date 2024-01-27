import { createClient } from '@supabase/supabase-js';
const supabaseUrl = "https://zscxcugiglddaraobyuw.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzY3hjdWdpZ2xkZGFyYW9ieXV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYzNzMxNzEsImV4cCI6MjAyMTk0OTE3MX0.GwAGDRomYgM-6LhsQB2R4G3tgHpUBE89K6_Nz1EZLlI"
const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase };