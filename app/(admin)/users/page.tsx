"use client";

import { columns } from "./columns"
import { DataTable } from "./data-table"
import { userTableColumnSchemaType } from "@/types"
import { useEffect, useState } from "react";
import { LoaderIcon } from "@/components/LoaderIcon";
import { DataTablePagination } from "./pagination";

async function getData(): Promise<userTableColumnSchemaType[]> {
  const res = await fetch(`/api/user-list`);
  const data = await res.json();
  return data;
}
export default function UsersPage() {
  const [data, setData] = useState<userTableColumnSchemaType[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData().then((data) => {
      setData(data)
      setLoading(false)
    });
  }, [])
  return (
    <div className="container mx-auto ">
      {
        loading ? <LoaderIcon message="Generating User List" /> :
          (
            <DataTable columns={columns} data={data} />
          )
      }
    </div>
  )
}
