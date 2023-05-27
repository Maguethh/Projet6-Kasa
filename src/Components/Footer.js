import "../Styles/Footer.css";
import FooterLogo from "../Assets/footerlogo.png";

function Footer() {
  return (
    <div id="footer">
      <img src={FooterLogo} className="footerLogo"></img>
      <p className="footerText">© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
