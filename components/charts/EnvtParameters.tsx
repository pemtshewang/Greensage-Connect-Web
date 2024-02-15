"use client"

import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function SensorChart() {
  const dummyData = [
    { humidity: 50, temperature: 25, soilMoisture: 30, pressure: 23, recordedAt: '2024-02-12T08:00:00' },
    { humidity: 55, temperature: 26, soilMoisture: 35, pressure: 45, recordedAt: '2024-02-12T09:00:00' },
    { humidity: 0, temperature: 27, soilMoisture: 40, pressure: 67, recordedAt: '2024-02-12T10:00:00' }
    // Add more data points as needed
  ];

  return (
    <div className="graph border-2 relative border-muted-foreground">
      <h3 className='text-center p-5 font-mono font-bold'>Environmental Parameters Readings</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart width={300} height={100} data={dummyData} margin={{ top: 40, right: 30, bottom: 10, left: 30 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend iconType='wye' />
          <Line type="monotone" dataKey="temperature" stroke="#ff02d2" strokeWidth={2} />
          <Line type="monotone" dataKey="soilMoisture" stroke="#8ff213" strokeWidth={2} />
          <Line type="monotone" dataKey="pressure" stroke="#801fff" strokeWidth={2} />
          <Line type="monotone" dataKey="humidity" stroke="#ff0" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

