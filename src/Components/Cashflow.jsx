import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const Cashflow = ({ data }) => {
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

    // Clear existing bars and x-axis
    svg.selectAll("*").remove();

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
      .append("g")
      .attr("class", "combined-bar")
      .attr("transform", (d) => `translate(${xScale(d.category)},0)`)
      .append("rect")
      .attr("x", 0)
      .attr("y", h - margin.bottom)
      .attr("width", xScale.bandwidth())
      .attr("height", 0)
      .attr("fill", "#02bb78")
      .attr("ry", 5)
      .transition()
      .duration(2000) 
      .attr("y", (d) => yScale(d.inValue))
      .attr("height", (d) => h - margin.bottom - yScale(d.inValue));

    svg
      .selectAll(".combined-bar")
      .append("rect")
      .attr("x", 0)
      .attr("y", (d) => yScale(d.outValue))
      .attr("width", xScale.bandwidth())
      .attr("height", 0)
      .attr("fill", "#47B747")
      .attr("ry", 5)
      .transition()
      .duration(2000) // Adjust the duration as needed
      .attr("y", (d) => yScale(d.outValue))
      .attr("height", (d) => h - margin.bottom - yScale(d.outValue));

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
