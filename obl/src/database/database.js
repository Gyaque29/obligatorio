import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://ozsrlwajhgayduuhxkec.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96c3Jsd2FqaGdheWR1dWh4a2VjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2ODUxODYsImV4cCI6MjA2NTI2MTE4Nn0.fXL-Fgg1XB8BpaaXDHy1Qo-owvJygN1KCbu8BNGrfcw";

const supabase = createClient(supabaseUrl,supabaseKey);

