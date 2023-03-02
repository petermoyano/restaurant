import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.module.css";
import Image from "next/image";

const Navbar = () => (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <Image src={images.gericht} alt="app logo" />
    </div>
  </nav>
);

export default Navbar;
