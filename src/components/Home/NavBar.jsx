"use client"
import React from "react";
import Link from "next/link";
import { Menu } from 'lucide-react';
import styles from "../ui/navBarStyles.module.css"

const NavBar = (props) => {
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
              <Link href={props.sobre}>Sobre</Link>
            </li>

            <li>
              <Link href={props.reserva}>Reserva</Link>
            </li>

            <li>
              <Link href={props.especial}>Especial</Link>
            </li>

            <li>
              <Link href="/menu">Menu</Link>
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
