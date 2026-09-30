import { supabase } from "@/lib/supabase";

export default async function Home() {
    const { data, error } = await supabase.from("doctors").select("*");

    console.log("DATA:", data);
    console.log("ERROR:", error);

    return (
        <main>
            <h1>Supabase Connection Testing</h1>

            <p>Check terminal for result</p>
        </main>
    );
}
