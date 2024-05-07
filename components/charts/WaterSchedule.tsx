"use client";

import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

export interface waterScheduleInterface {
  startTime: string;
  endTime: string;
  repetitionDays: number;
}

const WaterChartGraph = ({
  waterScheduleRecords,
}: {
  waterScheduleRecords: waterScheduleInterface[];
}) => {
  const chartRef = useRef(null);
  const tooltipRef = useRef(null);

  const decodeRepetitionDays = (repetitionDays: number) => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const decodedDays = [];
    for (let i = 1; i <= 7; i++) {
      if ((repetitionDays & (1 << i)) !== 0) {
        decodedDays.push(daysOfWeek[i]);
      }
    }
    // Return a map of days to their index
    return decodedDays.reduce(
      (acc, day, index) => ({ ...acc, [day]: index }),
      {},
    );
  };

  useEffect(() => {
    const margin = { top: 20, right: 40, bottom: 30, left: 40 };
    const width = chartRef.current.clientWidth - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    // Remove any existing SVG elements
    d3.select(chartRef.current).selectAll("svg").remove();

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const parseTime = d3.timeParse("%H:%M");

    const x = d3
      .scaleTime()
      .domain([
        d3.min(waterScheduleRecords, (d) => parseTime(d.startTime)),
        d3.max(waterScheduleRecords, (d) => parseTime(d.endTime)),
      ])
      .range([0, width]);

    const decodedDays = waterScheduleRecords.map((record) =>
      decodeRepetitionDays(record.repetitionDays),
    );

    const y = d3
      .scaleBand()
      .domain(d3.merge(decodedDays).keys() as unknown as string[]) // Merge all decoded days and get unique keys
      .range([0, height])
      .padding(0.1)
      .paddingOuter(0.2);

    svg
      .selectAll(".bar")
      .data(waterScheduleRecords)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(parseTime(d.startTime)))
      .attr("y", (d) => y(decodeRepetitionDays(d.repetitionDays)[d.startTime])) // Set y based on start time day
      .attr("width", (d) => x(parseTime(d.endTime)) - x(parseTime(d.startTime)))
      .attr("height", y.bandwidth()) // Set height based on bandwidth
      .style("fill", "#6FA8DC")
      .on("mouseover", (event, d) => {
        const [x, y] = d3.pointer(event);
        const decodedDays = decodeRepetitionDays(d.repetitionDays);
        const tooltipContent = `
          <p>Start Time: ${d.startTime}</p>
          <p>End Time: ${d.endTime}</p>
          <p>Repetition Days: ${Object.keys(decodedDays).join(", ")}</p>
        `;
        d3.select(tooltipRef.current)
          .style("display", "block")
          .style("left", `${x}px`)
          .style("top", `${y}px`)
          .style("color", "black")
          .html(tooltipContent);
      })
      .on("mouseout", () => {
        d3.select(tooltipRef.current).style("display", "none");
      });

    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x));
    const leftAxis = svg.append("g"); // Create a new g for the left axis
    leftAxis.call(d3.axisLeft(y)); // No need to set tickFormat
  }, [waterScheduleRecords]);
  return (
    <div className="relative border-2 border-muted-foreground p-5 overflow-hidden">
      <div
        ref={tooltipRef}
        className="absolute bg-white border border-gray-300 shadow px-2 py-1 rounded-md pointer-events-none"
        style={{ display: "none" }}
      ></div>
      <div className="flex absolute justify-center container">
        <h3 className="font-mono font-bold">Water Schedule Records</h3>
      </div>
      <div className="p-4" ref={chartRef}></div>
    </div>
  );
};

export default WaterChartGraph;
