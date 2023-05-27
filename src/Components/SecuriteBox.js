import React from "react";
import "../Styles/SecuriteBox.css";

const show = document.getElementsByClassName("AboutBox");

function AboutBox() {
  return (
    <div className="AboutBox">
      <div className="TopAboutBox">
        <p className="TittleAboutBox">Sécurité</p>
        <p className="AboutBoxArrow">▼</p>
      </div>

      <div className="BottomAboutBox">
        <p className="MoreAboutBox">zaeae</p>
      </div>
    </div>
  );
}

export default AboutBox;
