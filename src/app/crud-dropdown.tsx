import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Ellipsis, Pencil, Trash } from "lucide-react";
  

export default function CrudDropDown(){
    return(
        <DropdownMenu>
        <DropdownMenuTrigger><Ellipsis /></DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem>
                <Pencil/>
                editar
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Trash/>
                remover
            </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    );
}