import { supabase } from "@/lib/supabase";

export async function getProjects({limit} = {}) {
  let query = supabase.from("projects").select("*").eq("published", true).order("display_order", {
    ascending: true,
  });

  if (limit) {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching projects:", error);
    return [];
  }

  return data;
}
