import React from "react";
import "./services.css";
import { images } from "../../constants/index";
const Services = () => {
  return (
    <div className="services__app" id="Services">
      <div className="service__section">
        <div className="service__left_section">
          <p>
            Fast and Affordable <br /> Services for You
          </p>
          <p>
            Distant orb has power to raise and purify our thoughts like a strain
            of sacred music.
          </p>
          <button>Services</button>
        </div>
        <div className="service__right_section">
          <div className="service__image_card">
            <img src={images.crane} alt="crane" />
          </div>
          <div className="service__details">
            <p>01. Building Renovation</p>
            <p>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
