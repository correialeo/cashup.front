import CategoryItem from "@/components/Category/category-item";
import NavBar from "@/components/Header/nav-bar";
import { Category } from "../types";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

async function getCat(){
    const response = await fetch("http://localhost:8080/api/category");
    return await response.json();
}
// {id: 1, icon: "Book", name: "Educação"}
export default async function CategoriesPage(){
    const data: Category[] = await getCat();

    return(
        <>
            <NavBar active="Categories"/>

            <main className="flex justify-center">
                <div className="bg-slate-900 min-w-2/3 m-6 p-6 rounded">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Categorias</h2>
                        <Button asChild>
                            <Link href="/categories/form">
                                <Plus/>
                                Nova Categoria
                            </Link>
                        </Button>
                    </div>

                    {data.length == 0 ? <p>Categoria nao cadastrada</p> :
                    data.map(category => <CategoryItem key={category.id} category={category}/>)}
                </div>
            </main>
        </>
    )
}