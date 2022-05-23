import React from "react";
import "../stylesheet/stylesheet.css";

//react-icons
import { AiFillHome, AiFillSetting, AiOutlineMenu } from "react-icons/ai";
import { click } from "@testing-library/user-event/dist/click";

const displayDropDown = () => {
  const dropbox = document.getElementById("toggle-dropdown");
  if (dropbox.style.display === "none") {
    dropbox.style.display = "flex";
    dropbox.style.flexDirection = "column";
  } else {
    dropbox.style.display = "none";
  }
};

const displayNav = () => {
  const menubar = document.getElementById("menu");
  if (menubar.style.display === "none") {
    menubar.style.display = "block";
  } else {
    menubar.style.display = "none";
  }
};

const Navbar = () => {
  return (
    <div>
      <div className="responsive-bar">
        <AiOutlineMenu
          className="icon-size menu"
          onClick={(e) => {
            e.preventDefault();
            displayNav();
          }}
        />
      </div>
      <div id="menu" className="header-container">
        <ul>
          {/* Logo icon  */}
          <li className="logo-list">
            <AiFillHome className="icon-size " />
          </li>

          {/* tabs  */}
          <div className="tab">
            <ul className="ul">
              <li className="link-item">
                <a href="/tab1">Tab1</a>
              </li>
              <li className="link-item">
                <a href="/tab2">Tab2</a>
              </li>
              <li className="link-item">
                <a href="./tab3">Tab3</a>
              </li>
              <li className="link-item">
                <a href="/tab4">Tab4</a>
              </li>
            </ul>
          </div>

          {/* Dropdown  */}
          <li
            className="dropdown"
            onClick={(e) => {
              e.preventDefault();
              displayDropDown();
            }}
          >
            <AiFillSetting className="icon-size" />
            <ul className="sub-item" id="toggle-dropdown">
              <li className="sub-link-item">
                <a href="/sub-head1">Setting 1</a>
              </li>
              <li className="sub-link-item">
                <a href="/sub-head1">Setting 2</a>
              </li>
              <li className="sub-link-item">
                <a href="/sub-head1">Setting 3</a>
              </li>
              <li className="sub-link-item">
                <a href="/sub-head1">Setting 4</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="space">
        . Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula,
        facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a
        lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed
        ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis
        imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida
        venenatis. Integer fringilla congue eros non fermentum. Sed dapibus
        pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
        scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
        congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut
        aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio.
        Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc
        sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
        sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget
        tellus gravida venenatis. Integer fringilla congue eros non fermentum.
        Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
        diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio,
        vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
        ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum
        augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis
        in odio. Praesent convallis urna a lacus interdum ut hendrerit risus
        congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
        In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
        dui eget tellus gravida venenatis. Integer fringilla congue eros non
        fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus.
        Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi
        lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
        Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce
        luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed
        ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
        hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum
        dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare
        turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla
        congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras
        ac leo purus.. Fusce luctus vestibulum augue ut aliquet. Mauris ante
        ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis
        urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum
        nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc
        venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus
        gravida venenatis. Integer fringilla congue eros non fermentum. Sed
        dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam
        velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio,
        vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
        ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum
        augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis
        in odio. Praesent convallis urna a lacus interdum ut hendrerit risus
        congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
        In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
        dui eget tellus gravida venenatis. Integer fringilla congue eros non
        fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus.
        Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi
        lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
        Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce
        luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed
        ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
        hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum
        dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare
        turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla
        congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras
        ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
        interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
        venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
        vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
        ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis
        urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum
        nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc
        venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus
        gravida venenatis. Integer fringilla congue eros non fermentum. Sed
        dapibus pulvinar nibh tempor porta. Cras ac leo purus.
      </div>
    </div>
  );
};

export default Navbar;
