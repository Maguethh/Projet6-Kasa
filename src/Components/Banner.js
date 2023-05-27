import Background from "../Assets/bannerlogo.jpg";
import "../Styles/Banner.css";

function Banner() {
  return (
    <div className="Banner">
      <img src={Background} className="BackgroundImage"></img>
      <p className="BackgroundText">Chez vous, partout et ailleurs</p>
    </div>
  );
}

export default Banner;
