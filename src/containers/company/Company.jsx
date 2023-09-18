import React from "react";
import "./company.css";
import { images } from "../../constants";

const details = [
  {
    image: images.consIcon,
    heading: "Professionals",
    para: "What looked like a small patch of purple grass, above five feet.",
  },
  {
    image: images.excavator1,
    heading: "Safety",
    para: "When it came near enough he perceived that it was not grass.",
  },
  {
    image: images.excavator2,
    heading: "Sustainability",
    para: "The roots were revolving for each small plant in the whole patch.",
  },
  {
    image: images.mixertruck,
    heading: "Quality",
    para: "Patch of purple grass, above five feet square, was moving across.",
  },
];

const Company = () => {
  return (
    <div className="app__services" id="Company">
      <div className="app__services_cards">
        {details.map((item, index) => (
          <div className="app__service_card" key={index}>
            <img src={item.image} alt={item.heading} />
            <h4>{item.heading}</h4>
            <p>{item.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Company;
