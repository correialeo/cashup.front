import Link from "next/link";

export default function NavBar(){
    return(
        <nav className="bg-slate-900 flex justify-between items-center p-6">
            <h1 className="text-3xl font-bold">Cash Up</h1>
            <ul className="flex gap-12">
                <li><Link href="/dashboard">Dashboard</Link></li>
                <li><Link href="/transactions">Transactions</Link></li>
                <li className="border-b-3 border-pink-600"><Link href="/categories">Categories</Link></li>
            </ul>
            <img className="size-12 rounded-full" src="http://github.com/correialeo.png" alt="UserImage" />
    </nav>
    )
}