import React from "react";
import list from "../Data/appart";
import "../Styles/EquipementsBox.css";

function EquipementsBox() {
  return (
    <div className="EquipementsBox">
      <div className="TopEquipementsBox">
        <p className="TittleEquipementsBox">Équipements</p>
        <p className="EquipementsBoxArrow">▼</p>
      </div>

      <div className="BottomEquipementsBox">
        <p className="MoreEquipementsBox"></p>
        <ul className="ListEquipementsBox">
          <li>Climatisation</li>
          <li>Climatisation</li>
          <li>Climatisation</li>
          <li>Climatisation</li>
        </ul>
      </div>
    </div>
  );
}

// Mettre {appart.equipments} dans ListEquipementsBox

export default EquipementsBox;
