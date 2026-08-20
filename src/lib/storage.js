import { supabase } from "./supabase";

export function getProjectsImageUrl(imageKey) {
    if (!imageKey) {
        return "/images/web-icon.svg";
    }

    const { data } = supabase.storage.from("projects-storage").getPublicUrl(imageKey);

    return data.publicUrl;
}