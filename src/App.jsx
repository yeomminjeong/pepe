// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  useHistory,
} from "react-router-dom";

import LaunchScreen from "./components/LaunchScreen";
import AnalysisContent from "./components/AnalysisContent";
import Analysising from "./components/Analysising";
import ResultPage from "./components/ResultPage";
import AnalysisPage from "./components/AnalysisPage";
import Join from "./components/Join";
import LoginEmail from "./components/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LaunchScreen />}></Route>
        <Route path="Login" element={<LoginEmail />}></Route>
        <Route path="AnalysisContent" element={<AnalysisContent />}></Route>
        <Route path="Analysising" element={<Analysising />}></Route>
        <Route path="AnalysisPage" element={<AnalysisPage />}></Route>
        <Route path="Join" element={<Join />}></Route>
        <Route path="ResultPage" element={<ResultPage />}></Route>
      </Routes>
    </div>
    // <div>
    //   <LaunchScreen />
    //   <LoginEmail></LoginEmail>
    //   <Join></Join>
    //   <AnalysisContent />
    //   <AnalysisPage></AnalysisPage>
    //   <Analysising />
    //   <ResultPage />
    // </div>
  );
}
export default App;
