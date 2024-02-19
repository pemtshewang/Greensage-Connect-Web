"use client"

import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, AreaChart, Area, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { format } from "date-fns";

const formatDateTime = (isoDate: string) => {
  const date = new Date(isoDate);
  return format(date, 'yy/MM/dd@HH:mm'); // Format the date and time as desired
};

const ThresholdChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={400}>
    <AreaChart data={data} margin={{ top: 40, right: 30, bottom: 10, left: 30 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="recordedAt" tickFormatter={formatDateTime} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="soilMoisture" stackId="1" stroke="#69b3a2" fill="#69b3a2" />
      <Area type="monotone" dataKey="humidity" stackId="1" stroke="#a367e7" fill="#a367e7" />
      <Area type="monotone" dataKey="temperature" stackId="1" stroke="#ff7f0e" fill="#ff7f0e" />
    </AreaChart>
  </ResponsiveContainer>
);

const LineGraph = ({ data }) => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={data} margin={{ top: 40, right: 30, bottom: 10, left: 30 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="recordedAt" tickFormatter={formatDateTime} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="soilMoisture" stroke="#69b3a2" />
      <Line type="monotone" dataKey="humidity" stroke="#a367e7" />
      <Line type="monotone" dataKey="temperature" stroke="#ff7f0e" />
    </LineChart>
  </ResponsiveContainer>
);
const BarChartGraph = ({ data }) => (
  <ResponsiveContainer width="100%" height={400}>
    <BarChart data={data} margin={{ top: 40, right: 30, bottom: 10, left: 30 }} barCategoryGap="10%" barSize={20}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="recordedAt" tickFormatter={formatDateTime} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="soilMoisture" name="Soil Moisture" fill="#69b3a2" />
      <Bar dataKey="humidity" name="Humidity" fill="#a367e7" />
      <Bar dataKey="temperature" name="Temperature" fill="#ff7f0e" />
    </BarChart>
  </ResponsiveContainer>
);

export interface ReadingsParameterType {
  recordedAt: string,
  soilMoisture: number,
  humidity: number,
  temperature: number
}

export default function ReadingsGraph({ data }: { data: GraphType[] }) {
  const [selectedGraph, setSelectedGraph] = useState('bar');
  const [graphData, setGraphData] = useState<GraphType[]>([]);
  useEffect(() => {
    setGraphData(data);
  }, [])
  const handleGraphChange = (chart) => {
    setSelectedGraph(chart);
  };

  return (
    <>
      <div className="graph-selector border-2 relative border-muted-foreground">
        <h3 className='text-center font-mono font-bold p-3'>Environment Parameter Records Readings</h3>
        <p className="prose px-2">Visualization Graph</p>
        <form>
          <RadioGroup defaultChecked={true} defaultValue={selectedGraph} className='flex p-2' onValueChange={handleGraphChange}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="area" id="area" />
              <label htmlFor="area">Area Chart</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="bar" id="bar" />
              <label htmlFor="bar">Bar Chart</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="line" id="line" />
              <label htmlFor="line">Line Chart</label>
            </div>
          </RadioGroup>
        </form>
        {selectedGraph === 'area' && <ThresholdChart data={data} />}
        {selectedGraph === 'line' && <LineGraph data={data} />}
        {selectedGraph === 'bar' && <BarChartGraph data={data} />}
      </div>
    </>
  );
}

