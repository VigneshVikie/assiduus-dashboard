import React, { useState } from "react";
import MainNavbar from "./MainNavbar";
import CheckingAccount from "./CheckingAccount";
import Invoice from "./Invoice";
import Cashflow from "./Cashflow";
import Watchlist from "./Watchlist";
import chartData from "../helper/chartData";

const Main = () => {
  const [selectedMonth, setSelectedMonth] = useState("jan");
  const [manage, setManage] = useState("set1");
  const selectedData = chartData[selectedMonth];
  let dataByMonth = selectedData.checkingAccount;

  if (manage === "set1") {
    dataByMonth = selectedData.set1;
  } else if (manage === "set2") {
    dataByMonth = selectedData.set2;
  } else if (manage === "set3") {
    dataByMonth = selectedData.set3;
  } else {
    dataByMonth = selectedData.checkingAccount;
  }
  return (
    <div className="main">
      <MainNavbar />
      <div className="charts">
        <CheckingAccount
          dataByMonth={dataByMonth}
          setSelectedMonth={setSelectedMonth}
          setManage={setManage}
          selectedData={selectedData}
          selectedMonth={selectedMonth}
        />
        <Invoice data={selectedData.invoice} />
        <Cashflow data={selectedData.cashflow} />
        <Watchlist data={selectedData.watchlist} />
      </div>
    </div>
  );
};

export default Main;
