import {createClient} from "@supabase/supabase-js";

// @ts-expect-error: compiler seem to miss env from meta
const supabaseUrl = import.meta.env.VITE_STORAGE_API_URL;

// @ts-expect-error: compiler seem to miss env from meta
const supabaseKey = import.meta.env.VITE_STORAGE_API_KEY;


const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
