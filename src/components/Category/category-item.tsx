import CrudDropDown from "@/app/crud-dropdown";
import Icon from "../Icons/icon";
import { Category } from "@/app/types";

interface CategoryItemProps{
    category: Category
}

export default function CategoryItem({category}: CategoryItemProps){
    return(
        <div className="flex justify-between mt-4 gap-2">
            <div className="flex gap-3">
                <Icon name={category.icon}/>
                <span>{category.name}</span>
            </div>
            <div>
                <CrudDropDown/>
            </div>
        </div>
    )
}