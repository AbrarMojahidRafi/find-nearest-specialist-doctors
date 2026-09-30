import Link from "next/link";

interface DoctorCardProps {
    doctor: any;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
    return (
        <div
            className="
            border
            rounded-xl
            p-6
            shadow-sm
            hover:shadow-md
            transition
            bg-white
        ">
            <div className="flex gap-5">
                {/* Doctor Image */}

                <div
                    className="
                    w-24
                    h-24
                    rounded-full
                    bg-gray-200
                    flex
                    items-center
                    justify-center
                ">
                    <span>👨‍⚕️</span>
                </div>

                <div>
                    <h2
                        className="
                    text-xl
                    font-bold
                    ">
                        {doctor.name}
                    </h2>

                    <p className="text-gray-600 mt-1">
                        {doctor.specializations?.name}
                    </p>

                    <p className="mt-2">{doctor.degree}</p>

                    <p className="text-gray-600">
                        Experience:
                        {doctor.experience}
                        years
                    </p>

                    <p className="text-gray-600">{doctor.hospital}</p>

                    <Link
                        href={`/doctors/${doctor.id}`}
                        className="
                    inline-block
                    mt-4
                    px-4
                    py-2
                    bg-black
                    text-white
                    rounded-lg
                    ">
                        View Profile
                    </Link>
                </div>
            </div>
        </div>
    );
}
