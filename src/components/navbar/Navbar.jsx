import React, { useState } from "react";
import "./Navbar.css";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [toggler, setToggler] = useState(false);

  const handleToggler = () => {
    setToggler(!toggler);
  };
  // console.log(toggler);
  return (
    <nav>
      <div className="app__logo">CNST</div>
      <div className="app__contact">
        <button>Contact</button>
        <span className="app__hamburger_span">
          <GiHamburgerMenu className="app__hamburger" onClick={handleToggler} />
        </span>
      </div>

      <div
        className={`app__responsive_navbar ${
          toggler ? "active" : "app__responsive_navbar"
        }`}
      >
        <ul>
          {["Company", "Services", "Projects", "News", "Contact"].map(
            (item, index) => (
              <li key={index}>
                <a href={`#${item}`} onClick={handleToggler}>
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
