import lucia from "lucia-sveltekit";
import supabase from "@lucia-sveltekit/adapter-supabase";
import { dev } from "$app/env";

const supaUrl = import.meta.env.VITE_SUPA_URL;
const supaSecret = import.meta.env.VITE_SUPA_SECRET;
const luciaSecret = import.meta.env.VITE_LUCIA_SECRET;

export const auth = lucia({
    adapter: supabase(supaUrl, supaSecret),
    secret: luciaSecret,
    env: dev ? "DEV" : "PROD",
});
