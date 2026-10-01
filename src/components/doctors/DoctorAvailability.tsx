interface AvailabilityProps {
    availability: any[];
}

export default function DoctorAvailability({
    availability,
}: AvailabilityProps) {
    return (
        <section className="mt-8">
            <h2
                className="
                text-2xl
                font-bold
                mb-4
                ">
                Available Schedule
            </h2>

            {availability.length === 0 ? (
                <p className="text-gray-600">No availability schedule found.</p>
            ) : (
                <div className="space-y-3">
                    {availability.map((item) => (
                        <div
                            key={item.id}
                            className="
                                    border
                                    rounded-lg
                                    p-4
                                    ">
                            <p className="font-semibold">{item.day}</p>

                            <p className="text-gray-600">
                                {item.start_time}
                                {" - "}
                                {item.end_time}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
