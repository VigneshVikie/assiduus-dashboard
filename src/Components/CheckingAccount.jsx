import React, { useState, useRef, useEffect } from "react";
import * as d3 from "d3";

const CheckingAccount = () => {
  const [selectedMonth, setSelectedMonth] = useState("jan");
  const svgRef = useRef();
  const curveLineRef = useRef(null);

  const generateRandomData = () => {
    return Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
  };

  const dataByMonth = {
    jan: [90, 120, 140, 70, 80, 120, 80, 80, 90, 120],
    feb: generateRandomData(),
    mar: generateRandomData(),
    apr: generateRandomData(),
    may: generateRandomData(),
    jun: generateRandomData(),
    jul: generateRandomData(),
    aug: generateRandomData(),
    sep: generateRandomData(),
    oct: generateRandomData(),
    nov: generateRandomData(),
    dec: generateRandomData(),
  };

  useEffect(() => {
    // Setting svg
    const w = 572;
    const h = 230;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("background", "#fff")
      .style("padding-right", "10px")
      .style("border-radius", "6px");
    // Setting scaling
    const xScale = d3
      .scaleLinear()
      .domain([0, dataByMonth[selectedMonth].length - 1])
      .range([10, w]);

      
    const yScale = d3.scaleLinear()
    .domain([-45, h]).range([h, 0]);

    const generateScaledLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);
    
    // Remove the previous curve line
    if (curveLineRef.current) {
      curveLineRef.current.remove();
    }

    // Setting axes
    const xAxis = d3
      .axisBottom(xScale)
      .ticks(dataByMonth[selectedMonth].length)
      .tickFormat((i) => i + 1);
    svg
      .append("g")
      .call(xAxis)
      .attr("transform", `translate(0, ${h - 35})`)
      .style("border-radius", "6px");

    // Remove the axis line
    svg.select(".domain").remove();

    // Style the tick marks and labels
    svg.selectAll(".tick line").attr("stroke", "none");
    svg
      .selectAll(".tick text")
      .attr("font-size", "12px")
      .attr("color", "#99999a74");

    // Setting data for svg
    const newCurveLine = svg
      .append("path")
      .attr("d", generateScaledLine(dataByMonth[selectedMonth]))
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", "#02BB7D")
      .style("stroke-width", 2);
    
    // Store a reference to the new curve line
    curveLineRef.current = newCurveLine;
  }, [selectedMonth]);

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <div className="checking-account chart-container">
      <div className="check-header">
        <h3>Checking account</h3>
        <div className="dropdown">
          <select name="manage" id="manage">
            <option value="manage">Manage</option>
          </select>
          <select
            name="months"
            id="months"
            value={selectedMonth}
            onChange={handleMonthChange}
          >
            <option value="jan">January</option>
            <option value="feb">February</option>
            <option value="mar">March</option>
            <option value="apr">April</option>
            <option value="may">May</option>
            <option value="jun">June</option>
            <option value="jul">July</option>
            <option value="aug">August</option>
            <option value="sep">September</option>
            <option value="oct">October</option>
            <option value="nov">November</option>
            <option value="dec">December</option>
          </select>
        </div>
      </div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default CheckingAccount;
