import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import styles from "./Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  const [toggleMenu, setToogleMenu] = useState(false);
  return (
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
      <div className={styles.app__navbar_smallscreen}>
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToogleMenu(true);
          }}
        />
        {toggleMenu && (
          <div
            className={`${styles.app__navbar_smallscreen_overlay} flex__center 
        slide - bottom
        `}
          >
            <MdOutlineRestaurantMenu
              fontSize={27}
              className={styles.overlay__close}
              onClick={() => {
                setToogleMenu(false);
              }}
            />
            <ul className={styles.app__navbar_smallscreen_links}>
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
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
