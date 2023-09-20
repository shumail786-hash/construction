import React from "react";
import "./FooterService.css";
import { images } from "../../constants";

const details = [
  {
    image: images.consIcon,
    heading: "990",
    title: "Projects Completed",
    para: "What looked like a small patch of purple grass, above five feet.",
  },
  {
    image: images.excavator1,
    heading: "2500",
    title: "Satisfied Clients",
    para: "When it came near enough he perceived that it was not grass.",
  },
  {
    image: images.excavator2,
    heading: "550",
    title: "Workers Employed",
    para: "The roots were revolving for each small plant in the whole patch.",
  },
  {
    image: images.mixertruck,
    heading: "150k+",
    title: "Value of Investment",
    para: "Patch of purple grass, above five feet square, was moving across.",
  },
];

const FootService = () => {
  return (
    <div className="app__services_dark" id="Testimonials">
      <div className="app__footer_services_dark">
        {details.map((item, index) => (
          <div className="app__footer_service_card" key={index}>
            <img src={item.image} alt={item.heading} />
            <h4>{item.heading}</h4>
            <p className="app__footer_service_card_para">{item.title}</p>
            <p className="app__footer_service_card_para2">{item.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FootService;
