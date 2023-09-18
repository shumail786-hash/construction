import React from "react";
import "./headercards.css";
import { AiOutlineDownCircle } from "react-icons/ai";
import { images } from "../../constants/index";
const HeaderCards = () => {
  return (
    <div className="app__header_cards">
      <div className="app__header_outline">
        <h5>10 Years of Experience</h5>
        <h1>
          We Build Your
          <br />
          Dreams
        </h1>
        <p>
          Truly it was a great journey, and in it I met with many, whom to know
          was love but whom never could I see again for life has not space
          enough.
        </p>
        <div className="app__see_projects">
          <button>
            <AiOutlineDownCircle className="app__project_down_arrow" />
          </button>{" "}
          <span>See Projects</span>
        </div>
      </div>
      <div className="app__header_imgCard">
        <div className="app__header_main_card">
          <div className="app__image_card">
            <img src={images.headerImage} alt="app_header" />
          </div>
          <div className="app__detail_card">
            <h5>Latest Projects</h5>
            <h3>Commercial Construction for House</h3>
            <div className="app__card_location">
              <span>Moscow, Russia</span>
              <span>August, 2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCards;
