import styles from "./css/LoginEmail.module.css";

const LoginEmail = () => {
  return (
    <form className={styles.loginemail} id="login">
      <button className={styles.controlsButtons}>
        <div className={styles.text}>로그인</div>
      </button>
      <button className={styles.controlsButtons1}>
        <div className={styles.text1}>카카오톡 로그인</div>
      </button>
      <input
        className={styles.controlsTextFieldFloatin}
        type="text"
        placeholder="Email"
      />
      <input
        className={styles.controlsTextFieldFloatin1}
        type="text"
        placeholder="password"
      />
      {/* <div className={styles.partialsTextFieldFloatin}>
        <div className={styles.textLabel}>password</div>
        <div className={styles.text2} />
      </div> */}
      <div className={styles.byContinuingYouContainer}>
        <span className={styles.byContinuingYouContainer1}>
          <span
            className={styles.byContinuingYou}
          >{`By continuing, you agree to our `}</span>
          <span className={styles.termsOfService}>Terms of Service</span>
          <span className={styles.byContinuingYou}>{` and `}</span>
          <span className={styles.termsOfService}>Privacy Policy</span>
          <span className={styles.byContinuingYou}>.</span>
        </span>
      </div>
      <div className={styles.div}>비밀번호 찾기</div>
      <div className={styles.barsNavBarsStandard}>
        <div className={styles.title}>로그인</div>
        <div className={styles.rightActionable}>Forgot Password</div>
        <img
          className={styles.leftActionableIcon}
          alt=""
          src="../left-actionable.svg"
        />
      </div>
      <button className={styles.controlsButtons2}>
        <div className={styles.text3}>Google</div>
      </button>
    </form>
  );
};

export default LoginEmail;
