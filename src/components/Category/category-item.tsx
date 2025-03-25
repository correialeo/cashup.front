import { Book } from "lucide-react";

export default function CategoryItem(){
    return(
        <div className="flex justify-between mt-4 gap-2">
            <div className="flex gap-3">
                <Book/>
                <span>Educação</span>
            </div>
            <div>
                <span>...</span> 
            </div>
        </div>
    )
}