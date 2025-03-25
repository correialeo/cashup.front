import Link from "next/link";

interface NavBarProps{
    active: "dashboard" | "transactions" | "categories"
}

export default function NavBar(props: NavBarProps){
    const {active} = props;
    const activeClass= "border-b-3 border-pink-600"

    return(
        <nav className="bg-slate-900 flex justify-between items-center p-6">
            <h1 className="text-3xl font-bold">Cash Up</h1>
            <ul className="flex gap-12">
                <li className={active === "dashboard" ? activeClass : ""}><Link href="/dashboard">Dashboard</Link></li>
                <li className={active === "transactions" ? activeClass : ""}><Link href="/transactions">Transactions</Link></li>
                <li className={active === "categories" ? activeClass : ""}><Link href="/categories">Categories</Link></li>
            </ul>
            <img className="size-12 rounded-full" src="http://github.com/correialeo.png" alt="UserImage" />
    </nav>
    )
}