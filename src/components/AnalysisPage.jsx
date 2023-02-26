import React from "react";

import styles from "./css/AnalysisPage.module.css";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
const AnalysisPage = () => {
  return (
    <div className={styles.analysispage}>
      <div className={styles.content}>
        <img
          className={styles.illustrationIcon}
          alt=""
          src="https://d1xzdqg8s8ggsr.cloudfront.net/63e229e22b248b7215f51341/008b2e24-611d-4237-b140-f490949780ef_1675767989322919469?Expires=-62135596800&Signature=poeQxCoRjOdvi08PrFONe1Xk7SHRojuKXBndu~iELJLLPC~dT~rpTKlx7G~5AT2PaKnRyJjRm0-Gxt36omX1yhfLdyOP6vNKp4GkD9dNEmBnPs9r5DcOa0-1PaF1KQ0u08dVZohpEq6dvwlPsfELKwlakGx50OcABzqVvPy5udYbwGmea2m3tcDQCyCVBpNk5Eowud3xWiP7NMvfERwSZDVTU3B-HWaZie5s6ZpxJxr8myJkC0y9wb8BxcLpD7y3MJwzlnw4wUF5IxQAjf0vpkw79oVtmTUKIJzsVQW5aG23YR2Lq9ksbvawUPonv3dIKVF78803244apfqnZOJDmQ__&Key-Pair-Id=K1P54FZWCHCL6J"
        />
        <div className={styles.content1}>
          <div className={styles.text}>
            <b className={styles.b}>어떤 동물일까요?</b>
            <div className={styles.div}>
              카메라 아이콘을 클릭해 영상을 업로드 해보세요.
            </div>
          </div>
          <div className={styles.controlsButtons}>
            <Link to="/AnalysisContent">
              <div className={styles.text1}>분석하기</div>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.barsNavBarsStandard}>
        <div className={styles.title}>W I L D E T</div>
      </div>
      <div className={styles.barsTabBarIcon}>
        <Link to="/LaunchScreen">
          <img
            className={styles.partialsTabBarIconOnly}
            src="https://d1xzdqg8s8ggsr.cloudfront.net/63e220c02b248b7215f5121f/adecd821-9c1b-45ed-b16e-d5ee25be1253_1675765460068442042?Expires=-62135596800&Signature=Awy0fQIiA6BtkIhhF8K6pZPGZKmHhLf4dwarGmOZ0RASGlKwbmcntoqEl30pZFUNqKZxYDTG7RveQHkQPYGybsnkUyGL7ymFoeaVZjVPNTehH~Ui2ZjTc-RCh5BKYWQnpI-g-bHdMipcpGIIj-Z~8-L2~Op03WBYq8GPFAb6dURlCsR4O78TDUihJA03e8~pJW0sFSimyXBWT0AVpuKYn6v3PShM-cNkgEC0t1kxXidq1wmb3tS46WzT3X7Pl8F5F6i4roA912Jk8gLcWI2dj9Z~82-WHaTfAvNc9zUho4qRvnBEg4jz4L3UY5DCwqw~dXm~pNr2VePjpNkByv0nxw__&Key-Pair-Id=K1P54FZWCHCL6J"
          />
        </Link>
        <img
          className={styles.partialsTabBarIconOnly}
          src="https://d1xzdqg8s8ggsr.cloudfront.net/63e229e22b248b7215f51341/5ddbb20f-6618-401a-bcb6-8d46e416891b_1675866910782698112?Expires=-62135596800&Signature=qU-swgjShmIM1MDDN3~EXVEL9wzLfEbTNwBuQsHFtY0PTwS3UF1RdlxXisY8oUhNMjLKbXCkwwGajwh895OrkSceyZ0x5zMM5z~Yc6jiuXf7~ypCW2znQOHLrIdyqixp9seCfITU3SbBRTflmBbO261IJLTqA2-tN9Ac7qEGXNN0VLDWacW5SYaasBXsMJLoUrY0Qh9mMkQjqKWvUG5lmJFnELqkecYZxgygkao1dKt0OCTbx5R9CauZzUqXM2PexKMxt2U0LjQFv5rDy9tBr8CTJUIfXuFI4a8Ur0ltsMPNTTab3L15J~3V9q8dDfh9zp~cbujLJFxATIILRumkEA__&Key-Pair-Id=K1P54FZWCHCL6J"
        />
        <img
          className={styles.partialsTabBarIconOnly}
          src="https://d1xzdqg8s8ggsr.cloudfront.net/63e220c02b248b7215f5121f/42dbaf9f-a4b8-40fe-a30d-6192b42b5058_1675765460068640375?Expires=-62135596800&Signature=m1uHQ65~qMAbSfK~pYVmKPMPfKp1rUCj8PRaCbuGFnswbchjTbLldsoeDwT2PnkAGaGTbrEv2scvv1ldzO8hCtOHshi0NX4wYF60xiDJebWEIszQ-KhXgHJYZwavtWNu89YfFy8zZwxgfI78OHk3An9iCK73FlJMndslhnPTguz-SZVqOfb01F2PX3-T8b~1YSfSQ5iC~mUU1JbEN~Jc8UGM3FjXgJA7UR1l6BXG9j4Kv-Q99UeAfE3-E~vZXWtshcXIbOsgYlKHqI3LSvo2cJc-LovBnGLFwKnqgaapT7ilTdi7seW2IQbqasinljGnw8pErTBRhRxWOuzuz3UxYQ__&Key-Pair-Id=K1P54FZWCHCL6J"
        />
      </div>
    </div>
  );
};

export default AnalysisPage;
