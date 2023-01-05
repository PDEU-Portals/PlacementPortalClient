import React from "react";

import logo from "../../images/navLogo.png";

import styles from "./Header.module.css";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
      </div>
      <div className={styles.right}>
        <Link to="/">
          <img src={logo} alt="Resume" />
        </Link>
      </div>
    </div>
  );
}

export default Header;