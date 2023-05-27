import Background from "../Assets/bannerlogo.jpg";
import "../Styles/Banner.css";

function Banner({ image }) {
  return (
    <div className="Banner">
      <img src={image} className="BackgroundImage"></img>
      <p className="BackgroundText">Chez vous, partout et ailleurs</p>
    </div>
  );
}

export default Banner;
