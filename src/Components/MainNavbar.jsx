import React from "react";
import { BsBellFill } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import { MdOutlineArrowDropDown } from "react-icons/md";
import avatar from "../assets/avatar.png";

const MainNavbar = () => {
  return (
    <div className="main-nav">
      <div className="nav-content">
        <div className="search">
          <div className="search-icon">
            <ImSearch />
          </div>
          <input className="search-box" type="search" />
        </div>
        <div className="bell">
          <BsBellFill />
        </div>
        <div className="avatar">
          <img src={avatar} />
          <MdOutlineArrowDropDown />
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
