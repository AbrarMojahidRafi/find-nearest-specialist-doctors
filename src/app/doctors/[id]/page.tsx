import { supabase } from "@/lib/supabase";
import DoctorAvailability from "@/components/doctors/DoctorAvailability";

export default async function DoctorProfilePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    console.log("Doctor ID:", id);

    const { data: doctor, error } = await supabase
        .from("doctors")
        .select(
            `
            *,
            specializations(
                name
            ),
            doctor_availability(
                id,
                day,
                start_time,
                end_time
            )
            `,
        )
        .eq("id", id)
        .single();

    console.log("Doctor Data:", doctor);

    console.log("Availability:", doctor?.doctor_availability);

    console.log("Doctor Error:", error);

    if (!doctor) {
        return (
            <main className="p-8">
                <h1>Doctor not found</h1>
            </main>
        );
    }

    return (
        <main className="px-8 py-12">
            <div
                className="
                max-w-3xl
                mx-auto
                border
                rounded-xl
                p-8
                shadow
                ">
                <h1
                    className="
                    text-4xl
                    font-bold
                    ">
                    {doctor.name}
                </h1>

                <p className="mt-4">
                    Specialist: {doctor.specializations?.name}
                </p>

                <p>Degree: {doctor.degree}</p>

                <p>Experience: {doctor.experience} years</p>

                <p>Hospital: {doctor.hospital}</p>

                <DoctorAvailability availability={doctor.doctor_availability} />

                <button
                    className="
                    mt-6
                    bg-black
                    text-white
                    px-6
                    py-3
                    rounded-lg
                    ">
                    Book Appointment
                </button>
            </div>
        </main>
    );
}
