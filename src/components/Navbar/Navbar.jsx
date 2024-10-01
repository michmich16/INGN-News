import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import style from './Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-solid-svg-icons";

export function Navbar({ setSelectedHashtag }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleFilter = (hashtag) => {
    setSelectedHashtag(hashtag);
  };

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  return (
    <nav className={style.navbar}>
      <div className={style.navContainer}>
        <NavLink className={style.navLogo} onClick={handleLogoClick}>INGN</NavLink>
        <ul className={`${style.navMenu} ${isOpen ? style.active : ''}`}>
          <li className={style.navItem}>
            <a href="#" className={style.navLink} onClick={() => handleFilter("")}>Alle</a>
          </li>
          <li className={style.navItem}>
            <a href="#" className={style.navLink} onClick={() => handleFilter("Indland")}>Indland</a>
          </li>
          <li className={style.navItem}>
            <a href="#" className={style.navLink} onClick={() => handleFilter("Udland")}>Udland</a>
          </li>
          <li className={style.navItem}>
            <a href="#" className={style.navLink} onClick={() => handleFilter("Teknologi")}>Teknologi</a>
          </li>
          <li className={style.navItem}>
            <a href="#" className={style.navLink} onClick={() => handleFilter("Sport")}>Sport</a>
          </li>
          <li className={style.navItem}>
            <a href="#" className={style.navLink} onClick={() => handleFilter("Politik")}>Politik</a>
          </li>
          <li className={style.navItem}>
            <a href="#" className={style.navLink} onClick={() => handleFilter("Samfund")}>Samfund</a>
          </li>
        </ul>
        <div className={style.hamburger} onClick={toggleMenu}>
          <span className={style.bar}></span>
          <span className={style.bar}></span>
          <span className={style.bar}></span>
        </div>
        <NavLink className={style.navLogin} to={'/login'}>
          <FontAwesomeIcon className={style.loginIcon} icon={faUser} />
        </NavLink>
      </div>
    </nav>
  );
}
