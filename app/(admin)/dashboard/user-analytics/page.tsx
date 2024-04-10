"use client";

import ReadingsGraph, {
  ReadingsParameterType,
} from "@/components/charts/ThresholdChart";
import { ThresholdRecordsType } from "@/components/charts/EnvtParameters";
import { useSearchParams } from "next/navigation";
import Icons from "@/components/Icons";
import { Suspense, useEffect, useState } from "react";
import { format } from "date-fns";
import ThresholdRecordGraph from "@/components/charts/EnvtParameters";
import WaterChartGraph, {
  waterScheduleInterface,
} from "@/components/charts/WaterSchedule";
import { env } from "@/env";

const getUserAnalyticsData = async ({ id }: { id: string }) => {
  const res = await fetch(
    `${env.NEXT_PUBLIC_BASE_URL}/api/dashboard/user/analytics?id=${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const data = await res.json();
  return data;
};

interface AnalyticsType {
  readings: ReadingsParameterType[];
  TemperatureThresholdRecord: {
    recordedAt: string;
    value: number;
  }[];
  soilMoistureThresholdRecords: {
    recordedAt: string;
    value: number;
  }[];
  waterScheduleRecords: {
    startTime: string;
    endTime: string;
    repetitionDays: number;
  }[];
  HumidityThresholdRecord: {
    value: number;
    recordedAt: string;
  }[];
}
const UserAnalyticPage = () => {
  const searchParams = useSearchParams();
  const [generating, setGenerating] = useState<boolean>(true);
  const [data, setUserData] = useState<AnalyticsType>();
  const [thresholdData, setThresholdData] = useState<ThresholdRecordsType>({
    SoilMoistureThresholdRecord: [],
    TemperatureThresholdRecord: [],
    HumidityThresholdRecord: [],
  });
  const [wsData, setWSData] = useState<waterScheduleInterface[]>([]);
  const id = searchParams.get("id");
  useEffect(() => {
    getUserAnalyticsData({ id: id as string }).then((res) => {
      setUserData(res);
      console.log("data is->", res);
    });
  }, [id]);

  useEffect(() => {
    if (data) {
      setThresholdData({
        TemperatureThresholdRecord: data.TemperatureThresholdRecord,
        HumidityThresholdRecord: data.HumidityThresholdRecord,
        SoilMoistureThresholdRecord: data.soilMoistureThresholdRecords,
      });
      setWSData(data.waterScheduleRecords);
      setGenerating(false); // Move setGenerating inside the callback to ensure it runs after setting userData
    }
  }, [data]);
  return (
    <>
      {generating ? (
        <div className="container flex items-center flex-col  justify-center space-y-2 lg:mt-40">
          <Icons.userListLoading width={72} height={72} />
          <p className="animate-pulse delay-1000 font-mono">
            Generating Analytics For User
          </p>
        </div>
      ) : (
        <div className="container space-y-4 lg:p-8">
          <h3 className="font-semibold">
            Analytics Generated for the target user
          </h3>
          <div className="flex justify-between">
            <span className="prose">
              The analytics is based on the{" "}
              {format(new Date(), "EEEE do MMMM hh:mm aa")}
            </span>
            <span className="flex space-x-2 w-fit ml-auto">
              <Icons.info color="gray" />
              <p className="prose text-sm">
                The graph generated are based on individual user
              </p>
            </span>
          </div>
          <ReadingsGraph data={data?.readings as ReadingsParameterType[]} />
          <ThresholdRecordGraph data={thresholdData as ThresholdRecordsType} />
          <Suspense fallback={<div>loading...</div>}>
            {wsData && <WaterChartGraph waterScheduleRecords={wsData} />}
          </Suspense>
        </div>
      )}
    </>
  );
};
export default UserAnalyticPage;
