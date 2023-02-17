import React from "react";
import styles from "./css/LaunchScreen.module.css";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

const LaunchScreen = () => {
  return (
    <div className={styles.launchScreen} id="main">
      <div className="logo">
        <img className={styles.pepe_logo} alt="" src="pepe_logo.png" />
      </div>
      <b className={styles.title}>p e p e</b>
      <div className={styles.petParents}>pet parents</div>
      <div className={styles.controlsButtons}>
        <Link to="/Login">
          <div className={styles.text}>시작하기</div>
        </Link>
      </div>
    </div>
  );
};

export default LaunchScreen;
