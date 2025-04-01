import { Category } from "@/app/types";

const API_URL="http://localhost:8080/api/category"

export async function getCat(){
    const response = await fetch(API_URL);
    return await response.json();
}