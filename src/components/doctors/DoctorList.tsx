import DoctorCard from "./DoctorCard";

export default function DoctorList({ doctors }: any) {
    return (
        <div
            className="
        grid
        md:grid-cols-2
        gap-6
        ">
            {doctors.map((doctor: any) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
        </div>
    );
}
