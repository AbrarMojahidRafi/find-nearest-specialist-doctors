export default function Home() {
    return (
        <main className="min-h-screen">
            <section className="text-center py-20 px-5">
                <h1 className="text-5xl font-bold leading-tight">
                    Find Your Nearest
                    <br />
                    Specialist Doctor
                </h1>

                <p className="mt-6 text-gray-600 text-lg">
                    Search qualified doctors near your location, explore
                    specialist profiles and book appointments easily.
                </p>

                <div className="mt-8 flex justify-center gap-4">
                    <a
                        href="/doctors"
                        className="px-6 py-3 bg-black text-white rounded-lg">
                        Find Doctors
                    </a>

                    <a href="/search" className="px-6 py-3 border rounded-lg">
                        Search Specialist
                    </a>
                </div>
            </section>

            <section className="px-10 py-10">
                <h2 className="text-3xl font-semibold text-center">
                    Why Choose Our Platform?
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mt-10">
                    <div className="border rounded-xl p-6">
                        <h3 className="text-xl font-bold">
                            Specialist Doctors
                        </h3>

                        <p className="mt-3 text-gray-600">
                            Find experienced doctors from different medical
                            fields.
                        </p>
                    </div>

                    <div className="border rounded-xl p-6">
                        <h3 className="text-xl font-bold">Nearby Hospitals</h3>

                        <p className="mt-3 text-gray-600">
                            Discover hospitals and chambers near your location.
                        </p>
                    </div>

                    <div className="border rounded-xl p-6">
                        <h3 className="text-xl font-bold">Easy Appointment</h3>

                        <p className="mt-3 text-gray-600">
                            Book appointments with your preferred specialists.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
