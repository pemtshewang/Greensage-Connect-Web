"use client";

import { columns } from "./columns"
import { DataTable } from "./data-table"
import { userTableColumnSchemaType } from "@/types"
import { useEffect, useState } from "react";
import { LoaderIcon } from "@/components/LoaderIcon";
import Icons from "@/components/Icons";

async function getData(): Promise<userTableColumnSchemaType[]> {
  const res = await fetch(`/api/user-list`);
  const data = await res.json();
  return data;
}
export default function UsersAnalyticsPage() {
  const [data, setData] = useState<userTableColumnSchemaType[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData().then((data) => {
      setData(data)
      setLoading(false)
    });
  }, [])
  return (
    <div className="container">
      {
        loading ? (
          <div className="container flex items-center flex-col  justify-center space-y-2 lg:mt-40">
            <Icons.userListLoading width={72} height={72} />
            <p className="animate-pulse delay-1000 font-mono">Generating User Analytics</p>
          </div>
        ) :
          (
            <DataTable columns={columns} data={data} />
          )
      }
    </div>
  )
}
