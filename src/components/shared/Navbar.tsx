import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-4 border-b">
            <Link href="/" className="text-xl font-bold">
                FindDoctor
            </Link>

            <div className="flex gap-6">
                <Link href="/doctors">Doctors</Link>

                <Link href="/search">Search</Link>

                <Link href="/login">Login</Link>
            </div>
        </nav>
    );
}
