import React, { useState } from "react";
import "./stylesheet/stylesheet.css";
import ResponsiveMenu from "./components/ResponsiveMenu";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Sell from "./pages/Sell";
import About from "./pages/About";

const App = () => {
  const [menu, setMenu] = useState(true);
  const toggleNavbar = () => {
    menu ? setMenu(false) : setMenu(true);
  };
  return (
    <Router>
      <div className="body">
        <ResponsiveMenu toggleNavbar={toggleNavbar} />
        <div className="display-flex">
          <div>{menu ? <Navbar /> : null}</div>
          <div>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/sell" element={<Sell />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
