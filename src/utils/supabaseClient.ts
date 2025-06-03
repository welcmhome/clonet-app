import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://clwckhbhawxzkqeqloig.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsd2NraGJoYXd4emtxZXFsb2lnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5Mjk1MTAsImV4cCI6MjA2MzUwNTUxMH0.Xm-pIT1NDBuKRBJWYJBFznrcgaX5-Lqh2e2x784rFb4';
export const supabase = createClient(supabaseUrl, supabaseKey); 