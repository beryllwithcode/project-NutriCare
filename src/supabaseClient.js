import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
