import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import styles from "./Navbar.module.css";
import Image from "next/image";

const Navbar = () => (
  <nav className={styles.app__navbar}>
    <div className={styles.app__navbar_logo}>
      <Image src={images.gericht} alt="app logo" />
    </div>
    <ul className={styles.app__navbar_links}>
      <li className="p__opensans">
        <a href="#home">Home</a>
      </li>
      <li className="p__opensans">
        <a href="#about">About</a>
      </li>
      <li className="p__opensans">
        <a href="#menu">Menu</a>
      </li>
      <li className="p__opensans">
        <a href="#awards">Awards</a>
      </li>
      <li className="p__opensans">
        <a href="#contact">Contact</a>
      </li>
    </ul>
    <div className={styles.app__navbar_login}>
      <a href="#login" className="p__opensans">
        Log in / Register
      </a>
      <div />
      <a href="/" className="p__opensans">
        Book Table
      </a>
    </div>
    <div className="app__navbar_smallcreen"></div>
  </nav>
);

export default Navbar;
