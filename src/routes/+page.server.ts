import { supabase } from '../supabaseClient'

export async function load() {
  const { data } = await supabase.from("countries").select();
  return {
    countries: data ?? [],
  };
}