import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ResponsiveMenu from "../components/ResponsiveMenu";
import "../stylesheet/stylesheet.css";

const Home = () => {
  const [menu, setMenu] = useState(false);

  const toggleNavbar = () => {
    menu ? setMenu(false) : setMenu(true);
    console.log(menu);
  };
  return (
    <div>
      <ResponsiveMenu toggleNavbar={toggleNavbar} />
      {menu ? <Navbar /> : null}
    </div>
  );
};

export default Home;
