import React, { useEffect, useRef } from "react";
import { select, scalePoint, scaleLinear, axisBottom, axisLeft, line, curveMonotoneX } from "d3";

// dummy code to render d3 chart will aanalyze on
const UserDashBoardChart = () => {
  const svgRef = useRef();

  useEffect(() => {
    // Dummy data
    const data = [
      { date: "08/11", value: 12000 },
      { date: "09/11", value: 22000 },
      { date: "10/11", value: 15000 },
      { date: "11/11", value: 30000 },
      { date: "12/11", value: 24000 },
      { date: "13/11", value: 35000 },
      { date: "14/11", value: 26000 },
      { date: "15/11", value: 40000 },
      { date: "16/11", value: 35000 },
      { date: "17/11", value: 29000 },
    ];

    // Set up dimensions and margins
    const margin = { top: 40, right: 40, bottom: 40, left: 40 };
    const width = 700 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Select the SVG element and clear previous contents
    const svg = select(svgRef.current);
    svg.selectAll("*").remove();

    const g = svg
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Scales
    const x = scalePoint()
      .domain(data.map((d) => d.date))
      .range([0, width]);

    const y = scaleLinear().domain([0, 50000]).range([height, 0]);

    // Axes
    const xAxis = axisBottom(x);
    const yAxis = axisLeft(y);

    g.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis)
      .style("color", "#ffffff");

    g.append("g").call(yAxis).style("color", "#ffffff");

    // Create gradient for the line
    const gradient = svg
      .append("defs")
      .append("linearGradient")
      .attr("id", "line-gradient")
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", 0)
      .attr("x2", width)
      .selectAll("stop")
      .data([
        { offset: "0%", color: "#ff00c8" },
        { offset: "50%", color: "#ff4d3d" },
        { offset: "100%", color: "#ffaa00" },
      ])
      .enter()
      .append("stop")
      .attr("offset", (d) => d.offset)
      .attr("stop-color", (d) => d.color);

    // Line generator
    const lineGenerator = line()
      .x((d) => x(d.date))
      .y((d) => y(d.value))
      .curve(curveMonotoneX); // Smooth curve

    // Draw line
    g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "url(#line-gradient)")
      .attr("stroke-width", 4)
      .attr("d", lineGenerator);

  }, []);

  return <svg ref={svgRef}></svg>;
};

export default UserDashBoardChart;
