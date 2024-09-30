import React, { useState } from 'react';
import styles from './Navbar.module.scss';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <a href="#" className={styles.navLogo}>INGN</a>
                <div className={styles.hamburger} onClick={toggleMenu}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
                <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
                    <li className={styles.navItem}><a href="#" className={styles.navLink}>Alle</a></li>
                    <li className={styles.navItem}><a href="#" className={styles.navLink}>Indland</a></li>
                    <li className={styles.navItem}><a href="#" className={styles.navLink}>Udland</a></li>
                    <li className={styles.navItem}><a href="#" className={styles.navLink}>Teknologi</a></li>
                    <li className={styles.navItem}><a href="#" className={styles.navLink}>Sport</a></li>
                    <li className={styles.navItem}><a href="#" className={styles.navLink}>Politik</a></li>
                    <li className={styles.navItem}><a href="#" className={styles.navLink}>Samfund</a></li>
                </ul>
                <a href="#" className={styles.navLogin}>Login</a>
            </div>
        </nav>
    );
}


