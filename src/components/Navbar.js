import React from "react";
import { AiFillHome, AiFillSetting, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  //toggle dropdown
  const toggleDropdown = () => {
    const dropdown = document.getElementById("dropdown");
    const active = document.getElementById("active");

    if (dropdown.style.display === "none") {
      dropdown.style.display = "block";
      active.style.borderBottom = "1px solid #ffffff";
    } else {
      dropdown.style.display = "none";
      active.style.borderBottom = "none";
    }
  };

  return (
    <div className="container">
      <header className="header">
        {/* Logo container  */}
        <div>
          <AiFillHome className="icon" />
        </div>
        {/* List container  */}
        <nav>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/tab01">TAB</a>
            </li>
            <li className="nav-item">
              <a href="/tab01">TAB</a>
            </li>
            <li className="nav-item">
              <a href="/tab01">TAB</a>
            </li>
            <li className="nav-item">
              <a href="/tab01">TAB</a>
            </li>
          </ul>
        </nav>
        {/* Setting dropdown  */}
        <div className="setting-container">
          <div
            className="setting-logo-container"
            id="active"
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown();
            }}
          >
            <AiFillSetting className="icon" />
          </div>
          <div className="dropdown-container" id="dropdown">
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <a href="/hello">SUB1</a>
              </li>
              <li className="dropdown-item">
                <a href="/hello">SUB2</a>
              </li>
              <li className="dropdown-item">
                <a href="/hello">SUB3</a>
              </li>
              <li className="dropdown-item">
                <a href="/hello">SUB4</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
