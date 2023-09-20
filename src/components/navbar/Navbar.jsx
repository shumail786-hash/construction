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
  return (
    <nav>
      <div className="app__logo">CNST</div>
      <div className="app__nav_container">
        <ul className="app__nav">
          {["Company", "Services", "Projects", "Portfolio", "Testimonials"].map(
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
      <div className="app__contact">
        {[<BiLogoFacebook />, <FaXTwitter />, <AiOutlineInstagram />].map(
          (item, index) => (
            <span className="app__social_links" key={index}>
              <li className="app__social_link">{item}</li>
            </span>
          )
        )}
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
          {["Company", "Services", "Projects", "Portfolio", "Testimonials"].map(
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
