import NavBar from "@/components/Header/nav-bar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";

export default function CategoryFormPage(){
    return(
        <>
            <NavBar active="Categories"/>

            <main className="flex justify-center">
                <div className="bg-slate-900 min-w-2/3 m-6 p-6 rounded">
                    <h2 className="text-lg font-semibold">Cadastrar Categoria</h2>
                    <form action="">
                        <Input placeholder="Nome da Categorie" name="name"/>
                        <Input placeholder="Nome do ícone" name="icon"/>

                        <div className="flex justify-end gap-2 mt-4">
                            <Button asChild variant="outline">
                                <Link href="/categories">
                                    <ArrowLeft/>Cancelar
                                </Link>
                            </Button>
                            <Button>
                                <Check/>
                                Cadastrar
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}