import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import style from './Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={style.navbar}>
            <div className={style.navContainer}>
                <NavLink className={style.navLogo} to={'/'}>INGN</NavLink>
                <ul className={`${style.navMenu} ${isOpen ? style.active : ''}`}>
                    <li className={style.navItem}><a href="#" className={style.navLink}>Alle</a></li>
                    <li className={style.navItem}><a href="#" className={style.navLink}>Indland</a></li>
                    <li className={style.navItem}><a href="#" className={style.navLink}>Udland</a></li>
                    <li className={style.navItem}><a href="#" className={style.navLink}>Teknologi</a></li>
                    <li className={style.navItem}><a href="#" className={style.navLink}>Sport</a></li>
                    <li className={style.navItem}><a href="#" className={style.navLink}>Politik</a></li>
                    <li className={style.navItem}><a href="#" className={style.navLink}>Samfund</a></li>
                </ul>
                <div className={style.hamburger} onClick={toggleMenu}>
                    <span className={style.bar}></span>
                    <span className={style.bar}></span>
                    <span className={style.bar}></span>
                </div>
                <NavLink className={style.navLogin} to={'/login'}><FontAwesomeIcon className={style.loginIcon} icon={faUser} /></NavLink>

            </div>
        </nav>
    );
}


