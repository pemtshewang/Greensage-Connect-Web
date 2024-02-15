"use client"
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import { userTableColumnSchemaType } from "@/types"
import { format } from "date-fns";
import { toast } from "sonner"
import { useState } from "react"
import GenerateCode from "@/components/GenerateCodeScreen"

const deleteUserById = async (id: string) => {
  const res = await fetch("http://localhost:3000/api/user", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id })
  })
  if (res.ok) {
    toast.success("User deleted successfully")
    return true
  }
  toast.error("Something went wrong");
  return false;
}

export const columns: ColumnDef<userTableColumnSchemaType>[] = [
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "cid",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Citizen ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "mobile",
    header: "Mobile Number",
  },
  {
    accessorKey: "registeredAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Registered At
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return format(new Date(row.getValue("registeredAt")), "dd MMM yyyy HH:mm:ss")
    }
  },
  {
    accessorKey: "dzongkhag",
    header: "Dzongkhag",
  },
  {
    accessorKey: "gewog",
    header: "Gewog",
  },
  {
    accessorKey: "greenhouseCount",
    header: "Total Greenhouses",
  },
  {
    accessorKey: "irrigationCount",
    header: "Total Irrigation Controllers",
  },
  // side actions for respective row
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original
      const [isOpen, setIsOpen] = useState(false);
      const handleOpen = () => {
        setIsOpen(prevState => !prevState)
      }
      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => deleteUserById(user.id)}
                className="flex space-x-3">
                <span>
                  Delete User
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={handleOpen}
                className="flex space-x-3">
                <span>
                  Generate Code
                </span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View Details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <GenerateCode id={row.original.id} handleOpen={handleOpen} isOpen={isOpen} />
        </>
      )
    },
  },
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <div className="p-2">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  }
]
