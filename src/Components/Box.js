import React, { useState } from "react";
import "../Styles/Box.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Box({ title, description, equipmentlist }) {
  const [visibleSection, setVisibleSection] = useState(true);
  const clickBtn = () => {
    setVisibleSection(!visibleSection);
  };

  return (
    <div className="Box">
      <div className="BoxTop" onClick={clickBtn}>
        <h3 className="BoxTitle">{title}</h3>
        <span className="BoxArrow">
          {!visibleSection && <FontAwesomeIcon icon={faChevronDown} />}
          {visibleSection && <FontAwesomeIcon icon={faChevronUp} />}
        </span>
      </div>
      <div className="BoxBottom">
        {visibleSection && <p className="BoxDescription">{description}</p>}
        {visibleSection && Array.isArray(equipmentlist) && (
          <ul className="Equipments">
            {equipmentlist.map((equipment, index) => (
              <li key={index} className="Equipment">
                {equipment}
              </li>
            ))}
          </ul>
        )}
        {visibleSection && !Array.isArray(equipmentlist)}
      </div>
    </div>
  );
}

export default Box;
