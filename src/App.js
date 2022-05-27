import React, { useState } from "react";
import "./stylesheet/stylesheet.css";
import ResponsiveMenu from "./components/ResponsiveMenu";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import States from "./pages/States";
import District from "./pages/District";
import About from "./pages/About";

const App = () => {
  const [menu, setMenu] = useState(true);

  const toggleNavbar = () => {
    menu ? setMenu(false) : setMenu(true);
  };

  const visitedPlace = [
    {
      id: 1,
      districts: "Bhaktapur",
      visited: false,
    },
    {
      id: 2,
      districts: "Kathmandu",
      visited: false,
    },
    {
      id: 3,
      districts: "Gorkha",
      visited: false,
    },
    {
      id: 4,
      districts: "Mustang",
      visited: false,
    },
    {
      id: 5,
      districts: "Bardiya",
      visited: false,
    },
    {
      id: 6,
      districts: "Palpa",
      visited: false,
    },
  ];
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
              <Route
                path="/"
                exact
                element={<Home visitedPlace={visitedPlace} />}
              />
              <Route
                path="/:states"
                exact
                element={<States statesDescription={statesDescription} />}
              />
              <Route
                path="/:states/:district"
                exact
                element={<District visitedPlace={visitedPlace} />}
              />
              <Route path="/about" exact element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
