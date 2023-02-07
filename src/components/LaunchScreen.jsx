import styles from "./LaunchScreen.module.css";

const LaunchScreen = () => {
  return (
    <div className={styles.launchScreen} id="main">
      <b className={styles.pepe}>p e p e</b>
      <div className={styles.petParents}>pet parents</div>
      <div className={styles.controlsButtons}>
        <div className={styles.text}>시작하기</div>
      </div>
      <img className={styles.pepe_logo} alt="" src="pepe_logo.png" />
    </div>
  );
};

export default LaunchScreen;
