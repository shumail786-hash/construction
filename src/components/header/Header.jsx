import React from "react";
import "./header.css";
import Navbar from "../navbar/Navbar";
import HeaderCards from "../headerCards/HeaderCards";
const Header = () => {
  return (
    <div className="app__header" id="Company">
      <div className="app__header_container">
        <Navbar />
        <HeaderCards />
      </div>
    </div>
  );
};
export default Header;
