import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const URL = import.meta.env.VITE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const supabase = createClient(URL, API_KEY)

export default supabase;