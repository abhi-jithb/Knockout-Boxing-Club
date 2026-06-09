export default function Navbar(){
    return(
        <nav className="flex justify-between items-center px-8 py-4 border-b">
            <h1 className="text-2xl font-bold">Knockout Boxing Club</h1>

            <ul className="flex gap-6">
                <li>Home</li>
                <li>Programs</li>
                <li>Trainers</li>
                <li>Contact</li>
            </ul>

        </nav>   
    )
}