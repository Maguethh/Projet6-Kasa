import { Link } from "react-router-dom";
import Header from "../Components/Header.js";
import "../Styles/NotFound.css";

function NotFound() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <h1 className="errorNumber">404</h1>
        <p className="errorText">
          Oups ! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="linkBack">
          Retourner sur la page d'accueil
        </Link>
      </main>
    </div>
  );
}

export default NotFound;
