import React, { useState } from "react";
import "./stylesheet/stylesheet.css";
import ResponsiveMenu from "./components/ResponsiveMenu";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import States from "./pages/States";
import District from "./pages/District";

const App = () => {
  const [menu, setMenu] = useState(true);
  const toggleNavbar = () => {
    menu ? setMenu(false) : setMenu(true);
  };

  const statesDescription = [
    {
      id: 1,
      state: "Bagmati",
      districts: ["Bhaktapur", "Kathmandu"],
    },
    {
      id: 2,
      state: "Gandaki",
      districts: ["Gorkha", "Mustang"],
    },
    {
      id: 3,
      state: "Lumbini",
      districts: ["Bardiya", "Palpa"],
    },
  ];
  return (
    <Router>
      <div className="body ">
        <ResponsiveMenu toggleNavbar={toggleNavbar} />
        <div className="display-flex">
          <div>
            {menu ? <Navbar statesDescription={statesDescription} /> : null}
          </div>
          <div>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route
                path="/:states"
                exact
                element={<States statesDescription={statesDescription} />}
              />
              <Route path="/:states/:district" exact element={<District />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
