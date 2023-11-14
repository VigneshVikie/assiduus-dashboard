import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const Invoice = ({ data, setModalOpen, isModalOpen }) => {
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
      .domain([-30, d3.max(data, (d) => d.value)])
      .range([h - margin.bottom, margin.top]);

    // Create the bars
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.category))
      .attr("y", h - margin.bottom)
      .attr("width", xScale.bandwidth())
      .attr("height", 0)
      .attr("fill", "#47B747")
      .attr("rx", 5)
      .attr("ry", 5)
      .transition()
      .duration(2000)
      .attr("y", (d) => yScale(d.value))
      .attr("height", (d) => h - margin.bottom - yScale(d.value));

    // Create x-axis
    const xAxis = d3.axisBottom(xScale);
    svg
      .append("g")
      .attr("class", "x-axis")
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

  const handleCLick = ()=>{
    setModalOpen(!isModalOpen)
    document.body.style.overflow = "hidden";

  }

  return (
    <div className="invoice chart-container">
      <div className="invoice-header">
        <h3>Invoices owed to you</h3>

        <div className="invoice-upload" onClick={handleCLick}>New Sales Invoice</div>
      </div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default Invoice;
