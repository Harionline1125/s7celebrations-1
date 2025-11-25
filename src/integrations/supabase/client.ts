import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

// Create a safe client so the app doesn't crash if env vars are missing.
// If envs are not set, we create a placeholder client. Network calls will still fail,
// but the site will render.
export const supabase = (SUPABASE_URL && SUPABASE_ANON_KEY)
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : createClient("https://placeholder.supabase.co", "public-anon-key-placeholder");

// Supabase client ready to use
if (import.meta.env.DEV) {
  try {
    const host = SUPABASE_URL ? new URL(SUPABASE_URL).host : "";
    const anonLen = SUPABASE_ANON_KEY ? String(SUPABASE_ANON_KEY.length) : "0";
    // eslint-disable-next-line no-console
    console.info(
      "[Supabase Env] URL set:", Boolean(SUPABASE_URL),
      "Host:", host || "(none)",
      "Anon key present:", Boolean(SUPABASE_ANON_KEY),
      "Anon key length:", anonLen,
    );
  } catch {
    // eslint-disable-next-line no-console
    console.warn("[Supabase Env] Invalid VITE_SUPABASE_URL");
  }
}
