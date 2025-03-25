import Link from "next/link";

interface NavBarProps{
    active: "Dashboard" | "Transactions" | "Categories"
}

export default function NavBar(props: NavBarProps){
    const {active} = props;
    const activeClass= "border-b-3 border-pink-600"

    const links = [
        {label: "Dashboard", href: "/dashboard"},
        {label: "Transactions", href: "/transactions"},
        {label: "Categories", href: "/categories"},
    ]

    return(
        <nav className="bg-slate-900 flex justify-between items-center p-6">
            <h1 className="text-3xl font-bold">Cash Up</h1>
            <ul className="flex gap-12">
                {links.map(link => (
                    <li key={link.href}>
                        <Link href={link.href} className={` hover:text-pink-600 ${active === link.label && activeClass}`}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <img className="size-12 rounded-full" src="http://github.com/correialeo.png" alt="UserImage" />
    </nav>
    )
}