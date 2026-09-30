import { getDoctors } from "@/lib/doctor";

import DoctorList from "@/components/doctors/DoctorList";

export default async function DoctorsPage() {
    const doctors = await getDoctors();

    return (
        <main className="px-8 py-12">
            <section className="text-center mb-10">
                <h1
                    className="
                text-4xl
                font-bold
                ">
                    Find Specialist Doctors
                </h1>

                <p
                    className="
                mt-3
                text-gray-600
                ">
                    Explore qualified doctors and healthcare specialists
                </p>
            </section>

            <DoctorList doctors={doctors} />
        </main>
    );
}
