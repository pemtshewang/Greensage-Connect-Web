"use client";

import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const WaterChartGraph = () => {
  const chartRef = useRef(null);
  const tooltipRef = useRef(null);
  const chartData = [
    { id: "Task 1", start: new Date("2024-02-12T08:00:00"), end: new Date("2024-02-12T09:30:00") },
    { id: "Task 2", start: new Date("2024-02-12T09:45:00"), end: new Date("2024-02-12T11:00:00") },
    { id: "Task 3", start: new Date("2024-02-12T11:30:00"), end: new Date("2024-02-12T12:45:00") },
  ];

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

    const x = d3.scaleTime().domain([d3.min(chartData, d => d.start), d3.max(chartData, d => d.end)]).range([0, width]);

    const y = d3.scaleBand().domain(chartData.map(d => d.id)).range([0, height]).padding(0.1);

    svg.selectAll(".bar")
      .data(chartData)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("y", d => y(d.id))
      .attr("height", y.bandwidth())
      .attr("x", d => x(d.start))
      .attr("width", d => x(d.end) - x(d.start))
      .style("fill", "#6FA8DC") // Change the color if needed
      .on("mouseover", (event, d) => {
        const [x, y] = d3.pointer(event);
        const duration = (d.end - d.start) / (1000 * 60 * 60); // Calculate duration in hours
        d3.select(tooltipRef.current)
          .style("display", "block")
          .style("left", `${x}px`)
          .style("top", `${y}px`)
          .html(`<p><strong>Start:</strong> ${d.start.toLocaleTimeString()}</p>
                 <p><strong>End:</strong> ${d.end.toLocaleTimeString()}</p>
                 <p><strong>Duration:</strong> ${duration.toFixed(2)} hours</p>`);
      })
      .on("mouseout", () => {
        d3.select(tooltipRef.current).style("display", "none");
      });

    svg.append("g").attr("transform", `translate(0, ${height})`).call(d3.axisBottom(x));
    svg.append("g").call(d3.axisLeft(y));
  }, []);

  return (
    <div className="relative border-2 border-muted-foreground p-5 overflow-hidden">
      <div ref={tooltipRef} className="absolute bg-white border border-gray-300 shadow px-2 py-1 rounded-md pointer-events-none" style={{ display: "none" }}></div>
      <div className="flex absolute justify-center container">
        <h3 className="font-mono font-bold">Water Schedule Records</h3>
      </div>
      <div ref={chartRef}></div>
    </div>
  );
};

export default WaterChartGraph;
