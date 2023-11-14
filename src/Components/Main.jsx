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
  const [isModalOpen, setModalOpen] = useState(false);

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

  

  const handleCLick = () => {
    setModalOpen(!isModalOpen);
    document.body.style.overflow = "auto";

  };


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
        <Invoice
          data={selectedData.invoice}
          isModalOpen={isModalOpen}
          setModalOpen={setModalOpen}
        />
        <Cashflow data={selectedData.cashflow} />
        <Watchlist data={selectedData.watchlist} />
      </div>
      {isModalOpen && (
        <div className="invoice-modal" onClick={handleCLick}>
          <div className="modal-body">
            <button class="button" onClick={handleCLick}>
              <span class="X"></span>
              <span class="Y"></span>
              <div class="close">Close</div>
            </button>
            <h2>Add your Invoice</h2>
            <input type="file" id="upload-btn"/>
            <label id="upload-btn-label" htmlFor="upload-btn">
              Choose your Invoive to Upload
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
