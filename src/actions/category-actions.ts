import { redirect } from "next/navigation";

const API_URL="http://localhost:8080/api/category"

export async function getCat(){
    const response = await fetch(API_URL);
    return await response.json();
}

export async function createCat(initialState: any, cat: FormData){
    const body = {
        name: cat.get('name'),
        icon: cat.get('icon'),
    }

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (!response.ok){
        const errors = await response.json();
        return{
            values: {
                name: cat.get('name'),
                icon: cat.get('icon'),
            },
            errors: {
                name: errors.find(error => error.field === 'name')?.message,
                icon: errors.find(error => error.field === 'icon')?.message,
            }
        }
    }

    redirect("/categories")
}