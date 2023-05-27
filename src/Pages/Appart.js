import React from "react";
import Header from "../Components/Header.js";
import AppartImages from "../Components/AppartImages.js";
import Box from "../Components/Box.js";
import StarsRating from "../Components/StarsRating.js";
import list from "../Data/appart.json";
import "../Styles/Appart.css";

import { useParams } from "react-router-dom";

function Appart() {
  const { id } = useParams();
  const appart = list.find((elt) => elt.id === id);

  return (
    <div>
      <Header />

      <div>
        <div id="Carousel">
          <AppartImages img={appart.pictures} />
        </div>

        <div className="Appart-Top">
          <div className="Appart-Information">
            <h1 className="app-title">{appart.title}</h1>
            <p className="app-location">{appart.location}</p>
            <ul className="tags">
              {appart.tags.map((tag, index) => (
                <li key={index} className="tag">
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="Appart-Host">
            <div className="Host_Rating">
              <p className="host-name">{appart.host.name}</p>
              <img src={appart.host.picture} className="host-picture"></img>
            </div>
            <StarsRating rating={appart.rating} className="Star_Rating" />
          </div>
        </div>

        <div className="BoxesContainer">
          <Box title="Description" description={appart.description} />
          <Box title="Equipements" equipmentlist={appart.equipments} />
        </div>
      </div>
    </div>
  );
}

export default Appart;
