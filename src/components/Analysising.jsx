import React from "react";

import styles from "./css/Analysising.module.css";

const Analysising = () => {
  return (
    <div className={styles.analysising}>
      <div className={styles.content}>
        <img className={styles.bufferingIcon} alt="" src="buffering.png" />
        <div className={styles.info}>
          <div className={styles.text}>
            <b className={styles.text_b}>분석 중 입니다.</b>
            <div className={styles.div}>잠시만 기다려주세요.</div>
          </div>
        </div>
      </div>
      <div className={styles.barsNavBarsStandard}>
        <div className={styles.title}>W I L D E T</div>
        <div className={styles.rightActionable}>Action</div>
        <img className={styles.leftActionableIcon} alt="" src="leftIcon.png" />
      </div>
      {/* <div className={styles.TabBar}>
        <div className={styles.partialsTabBarIconOnly}>
          <img src="homeIcon.png" />
        </div>
        <div className={styles.partialsTabBarIconOnly}>
          <img src="analyIcon.png" />
        </div>
        <div className={styles.partialsTabBarIconOnly}>
          <img src="profileIcon.png" />
        </div>
      </div> */}
    </div>
  );
};

export default Analysising;
