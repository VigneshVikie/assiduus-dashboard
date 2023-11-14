import React, { useState } from "react";
import MainNavbar from "./MainNavbar";
import CheckingAccount from "./CheckingAccount";
import Invoice from "./Invoice";
import Cashflow from "./Cashflow";
import Watchlist from "./Watchlist";
import chartData from "../helper/chartData"

const Main = () => {

  console.log(chartData)
  
  const [selectedMonth, setSelectedMonth] = useState("jan");
  const selectedData = chartData[selectedMonth];


  return (
    <div className="main">
      <MainNavbar />
      <div className="charts">
        <CheckingAccount
          dataByMonth={selectedData.checkingAccount}
          setSelectedMonth={setSelectedMonth}
          selectedData={selectedData}
          selectedMonth={selectedMonth}
        />
        <Invoice data={selectedData.invoice} />
        <Cashflow data={selectedData.cashflow} />
        <Watchlist />
      </div>
    </div>
  );
};

export default Main;
