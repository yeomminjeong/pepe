import styles from "./css/AnalysisPage.module.css";

const AnalysisPage = () => {
  return (
    <div className={styles.analysispage}>
      <div className={styles.content}>
        <img className={styles.illustrationIcon} alt="" src="camera.png" />
        <div className={styles.content1}>
          <div className={styles.text}>
            <b className={styles.b}>반려동물 행동을 분석해보세요!</b>
            <div className={styles.div}>
              카메라 아이콘을 클릭해 영상을 업로드 해보세요.
            </div>
          </div>
          <div className={styles.controlsButtons}>
            <div className={styles.text1}>분석하기</div>
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
        <img
          className={styles.partialsTabBarIconOnly}
          alt=""
          src="../-partials--tab-bar-icon-only.svg"
        />
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

export default AnalysisPage;
