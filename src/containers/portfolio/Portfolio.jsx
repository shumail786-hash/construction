import React from "react";
import "./Portfolio.css";
import { images } from "../../constants";
const Portfolio = () => {
  const cardsAPI = [
    {
      image: images.dubai,
      title: "International Airport",
      para: "Building",
    },
    {
      image: images.worker,
      title: "New York Bank",
      para: "Construction",
    },
    {
      image: images.cranePorfolio,
      title: "Family House",
      para: "Project",
    },
    {
      image: images.building,
      title: "Mega Mall",
      para: "Building",
    },
    {
      image: images.stadium,
      title: "LA Arena",
      para: "Construction",
    },
    {
      image: images.dam,
      title: "Future Office",
      para: "Project",
    },
  ];
  return (
    <div className="app__portfolio" id="Portfolio">
      <article className="app__article_section">
        <button>Portfolio</button>
        <h1>Discuss our Capabilities</h1>
        <p>
          Distant orb has power to raise and purify our thoughts like a strain
          of sacred music.
        </p>
      </article>
      <div className="app__grid_container">
        {cardsAPI.map((element, index) => (
          <div className="items" key={element + index}>
            <div className="items_card">
              <img src={element.image} alt="bg_Img" />
            </div>
            <h4>{element.title}</h4>
            <p>{element.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
