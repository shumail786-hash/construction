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
    <div className="app__header">
      <nav className="app__header_nav">
        <div className="app__nav_logo">
          <h3>CNST</h3>

          <ul className="app__navbar_links">
            {["Company", "Services", "Project", "News", "Contact"].map(
              (element, index) => (
                <li key={index} className="app__nav_lists">
                  <a href={`#${element}`}> {element} </a>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="app__contact_links">
          <div className="app__social_links">
            <BiLogoFacebook className="app__social_icon facebook" />
          </div>
          <div className="app__social_links">
            <FaXTwitter className="app__social_icon" />
          </div>
          <div className="app__social_links">
            <AiOutlineInstagram className="app__social_icon instagram" />
          </div>
          <button className="app__contact_button">Contact</button>
          <div className="app__icon_button">
            <GiHamburgerMenu
              className="app__menu_icon"
              onClick={handleToggler}
            />
          </div>
        </div>
      </nav>

      {toggler === true && (
        <div className="app__responsive_navbar">
          <ul className="app__responsive_navbar_links">
            {["Company", "Services", "Project", "News", "Contact"].map(
              (element, index) => (
                <li key={index} className="app__nav_lists">
                  <a href={`#${element}`}> {element} </a>
                </li>
              )
            )}
          </ul>
          <div className="app__responsive_socials_links">
            <div className="app__responsive_social_links">
              <BiLogoFacebook className="app__social_icon facebook" />
            </div>
            <div className="app__responsive_social_links">
              <FaXTwitter className="app__social_icon" />
            </div>
            <div className="app__responsive_social_links">
              <AiOutlineInstagram className="app__social_icon instagram" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
