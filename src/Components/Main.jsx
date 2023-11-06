import React from "react";
import MainNavbar from "./MainNavbar";
import CheckingAccount from "./CheckingAccount";
import Invoice from "./Invoice";
import Cashflow from "./Cashflow";
import Watchlist from "./Watchlist";

const Main = () => {
  return (
    <div className="main">
      <MainNavbar />
      <div className="charts">
        <CheckingAccount />
        <Invoice />
        <Cashflow />
        <Watchlist />
      </div>
    </div>
  );
};

export default Main;
