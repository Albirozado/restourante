"use client"
import React from "react";
import Link from "next/link";
import { Menu } from 'lucide-react';
import styles from "../ui/navBarStyles.module.css"

const NavBar = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
           <span>LOGO</span>
        </div>
        <div className={styles.menuIcon} onClick={handleShowNavbar}>
           <Menu/>
        </div>
        <div className={`${styles.navElement} navElement   ${showNavbar && "active"}`}>
          <ul className={styles.lista}>
            <li>
              <Link href="/blogs">Sobre</Link>
            </li>

            <li>
              <Link href="/projects">Reserva</Link>
            </li>

            <li>
              <Link href="/about">Especial</Link>
            </li>

            <li>
              <Link href="/contact">Menu</Link>
            </li>
            <li>
              <Link href="/Serviços">Serviços</Link>
            </li>

          </ul>
        </div>
    </div>
    </nav>
  );
};
export default NavBar
