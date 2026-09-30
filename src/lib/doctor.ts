import { supabase } from "./supabase";

export async function getDoctors() {
    const { data, error } = await supabase.from("doctors").select(`
    
    *,
    
    specializations(
        name
    )

    `);

    if (error) {
        console.log(error);

        return [];
    }

    return data;
}
