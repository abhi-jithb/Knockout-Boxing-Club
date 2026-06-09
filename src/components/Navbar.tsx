import Link from "next/link"

export default function Navbar(){
    return(
        <nav className="flex justify-between items-center px-8 py-4 border-b">
            <h1 className="text-2xl font-bold">Knockout Boxing Club</h1>

            <ul className="flex gap-6">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/programs">Programs</Link></li>
                <li><Link href="/trainers">Trainers</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>

        </nav>   
    )
}