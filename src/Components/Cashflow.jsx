import React, { useState, useRef, useEffect } from "react";
import * as d3 from "d3";

const Cashflow = () => {
  const [data] = useState([
    { category: "August", inValue: 80, outValue: 20 },
    { category: "September", inValue: 20, outValue: 10 },
    { category: "October", inValue: 40, outValue: 30 },
    { category: "November", inValue: 30, outValue: 20 },
    { category: "December", inValue: 20, outValue: 10 },
    { category: "January", inValue: 100, outValue: 50 },
  ]);

  const svgRef = useRef();

  useEffect(() => {
    const w = 550;
    const h = 230;
    const margin = { top: 20, right: 0, bottom: 35, left: 0 };
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("background", "#fff")
      .style("padding-right", "10px")
      .style("border-radius", "6px");

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.category))
      .range([margin.left, w - margin.right])
      .padding(0.8);

    const yScale = d3
      .scaleLinear()
      .domain([-30, d3.max(data, (d) => Math.max(d.inValue, d.outValue))])
      .range([h - margin.bottom, margin.top]);

    // Create the bars
    svg
      .selectAll(".combined-bar")
      .data(data)
      .enter()
      .append("g") // Create a group for each bar
      .attr("class", "combined-bar")
      .attr("transform", (d) => `translate(${xScale(d.category)},0)`)
      .append("rect")
      .attr("x", 0)
      .attr("y", (d) => yScale(d.inValue))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => h - margin.bottom -yScale(d.inValue))
      .attr("fill", "#02bb78")
      .attr("ry", 5);

    svg
      .selectAll(".combined-bar")
      .append("rect")
      .attr("x", 0)
      .attr("y", (d) => yScale(d.outValue))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => h - margin.bottom - yScale(d.outValue))
      .attr("fill", "#47B747")
      .attr("ry", 5);

    // Create x-axis
    const xAxis = d3.axisBottom(xScale);
    svg
      .append("g")
      .attr("transform", `translate(0, ${h - margin.bottom})`)
      .call(xAxis);

    svg.select(".domain").remove();

    // Style the tick marks and labels
    svg.selectAll(".tick line").attr("stroke", "none");
    svg
      .selectAll(".tick text")
      .attr("font-size", "12px")
      .attr("color", "#99999a74");

    // Create y-axis
    const yAxis = d3.axisLeft(yScale);
    svg.append("g").call(yAxis).select(".domain").remove();
  }, [data]);
  return (
    <div className="cashflow chart-container">
      <div className="cashflow-header">
        <h3>Total cash flow</h3>
        <div className="chart-indicators">
          <div className="indicator1"></div>
          <span className="indicator-txt">In</span>
          <div className="indicator2"></div>
          <span className="indicator-txt">Out</span>
        </div>
      </div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default Cashflow;
