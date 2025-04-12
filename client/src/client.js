import { createClient } from '@supabase/supabase-js'


const URL = 'https://jotrqnczmwmtufhlwvbu.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvdHJxbmN6bXdtdHVmaGx3dmJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0ODEzMDUsImV4cCI6MjA2MDA1NzMwNX0.QiZGfTRf6WumGNvOO4t-Y6JFGhT3PD47_W-07jRkcHA';
export const supabase = createClient(URL, API_KEY);
