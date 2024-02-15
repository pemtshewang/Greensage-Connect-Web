"use client"

import SensorChart from "@/components/charts/EnvtParameters"
import GraphSelector from "@/components/charts/ThresholdChart"
import WaterChartGraph from "@/components/charts/WaterSchedule"
import { useSearchParams } from "next/navigation"
import Icons from "@/components/Icons"
import { useState } from "react"
import { format } from "date-fns";

const UserAnalyticPage = () => {
  const searchParams = useSearchParams();
  const [generating, setGenerating] = useState();
  const id = searchParams.get("id");
  console.log(id);
  return (
    <>
      {
        generating ? (
          <div className="container flex items-center flex-col  justify-center space-y-2 lg:mt-40" >
            <Icons.userListLoading width={72} height={72} />
            <p className="animate-pulse delay-1000 font-mono">Generating Analytics For User</p>
          </div >
        ) : (
          <div className="container space-y-4 lg:p-8">
            <h3 className="font-semibold">Analytics Generated for User Pem</h3>
            <div className="flex justify-between">
              <span className="prose">
                The analytics is based on the {format(new Date(), "EEEE do MMMM hh:mm aa")}
              </span>
              <span className="flex space-x-2 w-fit ml-auto">
                <Icons.info color="gray" />
                <p className="prose text-sm">
                  The graph generated are based on individual user
                </p>
              </span>
            </div>
            <GraphSelector />
            <SensorChart />
            <WaterChartGraph />
          </div>

        )
      }
    </>
  )
}
export default UserAnalyticPage;
