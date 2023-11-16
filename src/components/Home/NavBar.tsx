"use client"
import React from "react";
import Link from "next/link";
import { Menu } from 'lucide-react';
import styles from "../ui/navBarStyles.module.css"

const NavBar = (props: any) => {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/">
           <span>LOGO</span>

          </a>
        </div>
        <div className={styles.menuIcon} onClick={handleShowNavbar}>
           <Menu/>
        </div>
        <div className={`${styles.navElement} navElement   ${showNavbar && "active"}`}>
          <ul className={styles.lista}>
            <li>
              <a href={props.sobre}>Sobre</a>
            </li>

            <li>
              <a href={props.reserva}>Reserva</a>
            </li>

            <li>
              <a href={props.especial}>Especial</a>
            </li>

            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/Serviços">Serviços</a>
            </li>

          </ul>
        </div>
    </div>
    </nav>
  );
};
export default NavBar
