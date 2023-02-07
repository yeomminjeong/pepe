import styles from "./Analysising.module.css";

const Analysising = () => {
  const icon = (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19"
        stroke="#979C9E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
        stroke="#979C9E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  return (
    <div className={styles.analysising}>
      <div className={styles.content}>
        <img
          className={styles.illustrationIcon}
          alt=""
          src="Illustration.png"
        />
        <div className={styles.content1}>
          <div className={styles.text}>
            <b className={styles.b}>분석 중 입니다.</b>
            <div className={styles.div}>잠시만 기다려주세요.</div>
          </div>
        </div>
      </div>
      <div className={styles.barsNavBarsStandard}>
        <div className={styles.title}>p e p e</div>
        <div className={styles.rightActionable}>Action</div>
        <img
          className={styles.leftActionableIcon}
          alt=""
          src="../left-actionable.svg"
        />
      </div>
      <div className={styles.barsTabBarIconOnly}>
        <div
          className={styles.partialsTabBarIconOnly}
          //   alt=""
          //   src="../-partials--tab-bar-icon-only.svg"
        >
          {icon}
        </div>
        <img
          className={styles.partialsTabBarIconOnly}
          alt=""
          src="../-partials--tab-bar-icon-only1.svg"
        />
        <img
          className={styles.partialsTabBarIconOnly}
          alt=""
          src="../-partials--tab-bar-icon-only2.svg"
        />
      </div>
    </div>
  );
};

export default Analysising;
