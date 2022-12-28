import React from "react";

import logo from "../../images/navLogo.png";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
      </div>
      <div className={styles.right}>
        <img src={logo} alt="Resume" />
      </div>
    </div>
  );
}

export default Header;