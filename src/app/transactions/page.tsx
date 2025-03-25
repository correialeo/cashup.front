import NavBar from "@/components/Header/nav-bar";

export default function TransactionsPage(){
    return(
        <>
            <NavBar/>

            <main className="flex justify-center">
                <div className="bg-slate-900 min-w-2/3 m-6 p-6 rounded">
                    <h2 className="text-lg font-semibold">Transações</h2>
                </div>
            </main>
        </>
    )
}