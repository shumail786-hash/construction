import React from "react";
import "./about.css";
const About = () => {
  return (
    <div id="Projects" className="app__about">
      <div className="app__about_video">
        <div className="app__video_background"></div>
        <div className="app__video"></div>
      </div>
      <div className="app__about_story">
        <button>About Us</button>
        <p>Story of Us for You to Discover</p>
        <p>
          Peep at some distant orbs has power to raise and purify our thoughts
          like a strain of sacred music, or a noble picture, or a passage from
          the grander poets. It always does good.
        </p>
        <div className="app__engineer">
          <div className="app__founder_image"></div>
          <div className="app__founder_detail">
            <p>Qurban Awan</p>
            <p>Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
