import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Appart from "./Pages/Appart";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Appart/:id" element={<Appart />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
