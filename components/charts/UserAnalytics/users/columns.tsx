"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { userTableColumnSchemaType } from "@/types";
import { toast } from "sonner";
import Link from "next/link";
import Icons from "@/components/Icons";
import { env } from "@/env";

const deleteUserById = async (id: string) => {
  const res = await fetch(`${env.NEXT_PUBLIC_BASE_URL}/api/user`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  if (res.ok) {
    toast.success("User deleted successfully");
    return true;
  }
  toast.error("Something went wrong");
  return false;
};

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
      );
    },
  },
  // side actions for respective row
  {
    id: "actions",
    header: ({ column }) => (
      <div>
        <h1>Actions</h1>
      </div>
    ),
    cell: ({ row }) => {
      const user = row.original;
      return (
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
              className="flex space-x-3"
            >
              <span>Delete User</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  {
    id: "analytics",
    header: ({ column }) => (
      <div>
        <h1>Analytics</h1>
      </div>
    ),
    cell: ({ row }) => {
      return (
        <Link
          className="flex space-x-2 underline"
          href={`/dashboard/user-analytics?id=${row.original.id}`}
        >
          <p>Analytics</p>
          <Icons.dashboard />
        </Link>
      );
    },
  },
];
