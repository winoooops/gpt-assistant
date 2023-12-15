import {createClient} from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_STORAGE_API_URL;
const supabaseKey = import.meta.env.VITE_STORAGE_API_KEY;

console.log(supabaseUrl, supabaseKey);

const supabase = createClient(supabaseUrl, supabaseKey);
console.log(supabase);
export default supabase;
