import { createClient } from "@supabase/supabase-js";

let url = "";
let key = "";

if(process.env.NEXT_PUBLIC_SUPABASE_URL) {
    url = process.env.NEXT_PUBLIC_SUPABASE_URL
}

if(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
}

export const sbdb = createClient( url, key );