import React from "react";
import logo from "../assets/logo.png";
import { BiSolidDashboard } from "react-icons/bi";
import { IoMdWallet } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";
import { MdManageAccounts, MdContacts } from "react-icons/md";

const SideNav = () => {
  return (
    <div className="side-nav">
      <nav className="nav-bar">
        <div className="logo">
         <a href="/"> <img src={logo} alt /></a>
        </div>
        <ul className="nav-list">
          <li className="lists">
            <a href="/">
              <div className="list-icons">
                <BiSolidDashboard />
              </div>
              <div className="list-links"> Dashboard</div>
            </a>
          </li>
          <li className="lists">
            <a href="/">
              <div className="list-icons">
                <IoMdWallet />
              </div>
              <div className="list-links">Accounts</div>
            </a>
          </li>
          <li className="lists">
            <a href="/">
              <div className="list-icons">
                <FaDollarSign />
              </div>
              <div className="list-links">Payroll</div>
            </a>
          </li>
          <li className="lists">
            <a href="/">
              <div className="list-icons">
                <IoDocumentText />
              </div>
              <div className="list-links">Reports</div>
            </a>
          </li>
          <li className="lists">
            <a href="/">
              <div className="list-icons">
                <MdManageAccounts />
              </div>
              <div className="list-links">Advisor</div>
            </a>
          </li>
          <li className="lists">
            <a href="/">
              <div className="list-icons">
                <MdContacts />
              </div>
              <div className="list-links">Contacts</div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
