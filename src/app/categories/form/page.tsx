"use client";

import { createCat } from "@/actions/category-actions";
import NavBar from "@/components/Header/nav-bar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react"; 

const initialState = {
    values: {
        name: "",
        icon: "",
    },
    errors: {
        name: "",
        icon: "",
    }
}

export default function CategoryFormPage(){
    const [state, formAction, pending] = useActionState(
        async (prevState: typeof initialState, formData: FormData) => {
            return await createCat(prevState, formData);
        },
        initialState
    );

    return(
        <>
            <NavBar active="Categories"/>

            <main className="flex justify-center">
                <div className="bg-slate-900 min-w-2/3 m-6 p-6 rounded">
                    <h2 className="text-lg font-semibold">Cadastrar Categoria</h2>
                    <form action={formAction}>
                        <div>
                            <Input 
                                placeholder="Nome da Categoria" 
                                name="name" 
                                aria-invalid={!!state?.errors.name}
                                defaultValue={state?.values.name} 
                            />
                            <span className="text-sm text-destructive">
                                {state?.errors.name}
                            </span>
                        </div>

                        <div>
                            <Input 
                                placeholder="Nome do ícone" 
                                name="icon" 
                                aria-invalid={!!state?.errors.icon}
                                defaultValue={state?.values.icon}
                            />
                            <span className="text-sm text-destructive">
                                {state?.errors.icon}
                            </span>
                        </div>

                        <div className="flex justify-end gap-2 mt-4">
                            <Button asChild variant="outline">
                                <Link href="/categories">
                                    <ArrowLeft className="mr-2 h-4 w-4"/>Cancelar
                                </Link>
                            </Button>
                            <Button disabled={pending}>
                                <Check className="mr-2 h-4 w-4"/>
                                {pending ? "Enviando..." : "Cadastrar"}
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}