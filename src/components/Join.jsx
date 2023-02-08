import styles from "./css/Join.module.css";

const Join = () => {
  return (
    <div className={styles.join}>
      <div className={styles.controlsTextFieldFloatin}>
        <div className={styles.partialsTextFieldFloatin}>
          <div className={styles.textLabel}>한번 더 입력해 주세요</div>
          <div className={styles.text} />
        </div>
      </div>
      <div className={styles.controlsTextFieldFloatin1}>
        <div className={styles.partialsTextFieldFloatin1}>
          <div className={styles.text1}>비밀번호를 입력해주세요</div>
        </div>
      </div>
      <div className={styles.text2}>비밀번호를 확인해주세요</div>
      <div className={styles.controlsTextFieldFloatin2}>
        <div className={styles.partialsTextFieldFloatin1}>
          <div className={styles.text1}>6자이상의 영문 혹은 숫자</div>
        </div>
      </div>
      <div className={styles.controlsTextFieldFloatin3}>
        <div className={styles.partialsTextFieldFloatin1}>
          <div className={styles.text1}>이름을 입력해주세요</div>
        </div>
      </div>
      <div className={styles.controlsTextFieldFloatin4}>
        <div className={styles.partialsTextFieldFloatin4}>
          <div className={styles.text5}>tod</div>
        </div>
      </div>
      <div className={styles.controlsTextFieldFloatin5}>
        <div className={styles.partialsTextFieldFloatin1}>
          <div className={styles.text5}>tod</div>
        </div>
      </div>
      <div className={styles.controlsTextFieldFloatin6}>
        <div className={styles.partialsTextFieldFloatin1}>
          <div className={styles.text5}>tod</div>
        </div>
      </div>
      <div className={styles.barsNavBarsStandard}>
        <div className={styles.title}>회원가입</div>
        <div className={styles.rightActionable}>Forgot Password</div>
        <img
          className={styles.leftActionableIcon}
          alt=""
          src="../left-actionable.svg"
        />
      </div>
      <div className={styles.div}>아이디</div>
      <div className={styles.div1}>비밀번호</div>
      <div className={styles.div2}>비밀번호 확인</div>
      <div className={styles.div3}>이름</div>
      <div className={styles.div4}>생년월일</div>
      <div className={styles.joinChild} />
      <button className={styles.controlsButtons}>
        <div className={styles.text8}>가입하기</div>
      </button>
    </div>
  );
};

export default Join;
