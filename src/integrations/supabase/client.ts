import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ✅ Debug test query (replace "your_table" with an actual table from your DB)
supabase
  .from("your_table") // 👈 change to a real table name, e.g. "messages"
  .select("*")
  .then((res) => console.log("Supabase test result:", res))
  .catch((err) => console.error("Supabase error:", err));
