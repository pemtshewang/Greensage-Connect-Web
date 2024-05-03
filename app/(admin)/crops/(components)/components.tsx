"use client";

import { useState } from "react";
import { EnvironmentParameterContext } from "./context";
import { ThresholdParameterDropdown } from "./dropdown-menu";
import CropsThresholdTable from "./(table)/main";
import { CropThreshold } from "./(table)/columns";

export default function ThresholdCombinedComponents() {
  const [data, setData] = useState<CropThreshold[]>([]);
  const [value, setValue] = useState<
    "temperature" | "soilmoisture" | "humidity"
  >("temperature");
  return (
      <EnvironmentParameterContext.Provider value={{ value, setValue }}>
        <div className="max-w-4xl mx-auto">
          <div className="w-fit ml-auto">
            <ThresholdParameterDropdown />
          </div>
          <CropsThresholdTable />
        </div>
      </EnvironmentParameterContext.Provider>
  );
}
