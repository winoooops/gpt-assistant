import {createClient} from "@supabase/supabase-js";
import {QueryClient} from "react-query";

// @ts-expect-error: compiler seem to miss env from meta
const supabaseUrl = import.meta.env.VITE_STORAGE_API_URL;

// @ts-expect-error: compiler seem to miss env from meta
const supabaseKey = import.meta.env.VITE_STORAGE_API_KEY;


const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000
    },
  },
});