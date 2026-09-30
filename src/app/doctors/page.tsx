import { getDoctors } from "@/lib/doctor";

export default async function DoctorsPage() {
    const doctors = await getDoctors();

    return (
        <div>
            <h1>Find Doctors</h1>

            {doctors.map((doctor: any) => (
                <div key={doctor.id}>
                    <h2>{doctor.name}</h2>

                    <p>{doctor.specializations?.name}</p>
                </div>
            ))}
        </div>
    );
}
