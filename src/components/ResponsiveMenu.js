import React from "react";
import "../stylesheet/stylesheet.css";
import { AiOutlineMenu } from "react-icons/ai";

const ResponsiveMenu = ({ toggleNavbar }) => {
  return (
    <div className="responsive-header">
      <AiOutlineMenu
        className="icon menu"
        onClick={(e) => {
          e.preventDefault();
          toggleNavbar();
        }}
      />
    </div>
  );
};

export default ResponsiveMenu;
