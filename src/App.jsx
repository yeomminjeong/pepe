// import logo from "./logo.svg";
import React from "react";
import "./App.css";

import LaunchScreen from "./components/LaunchScreen";
import AnalysisContent from "./components/AnalysisContent";
import Analysising from "./components/Analysising";
import ResultPage from "./components/ResultPage";
import AnalysisPage from "./components/AnalysisPage";
import Join from "./components/Join";
import LoginEmail from "./components/Login";

function App() {
  return (
    <div>
      <LaunchScreen />
      <LoginEmail></LoginEmail>
      <Join></Join>
      <AnalysisContent />
      <AnalysisPage></AnalysisPage>
      <Analysising />
      <ResultPage />
    </div>
  );
}
export default App;
