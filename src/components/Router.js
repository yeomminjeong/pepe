import React from "react";
import LaunchScreen from "./LaunchScreen";
import AnalysisContent from "./AnalysisContent";
import Analysising from "./Analysising";
import ResultPage from "./ResultPage";
import AnalysisPage from "./AnalysisPage";
import Join from "./Join";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";

export default function AppRouter({ isLoggedIn }) {
  return (
    <div className="App">
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/AnalysisPage" element={<AnalysisPage />}></Route>
            <Route path="/AnalysisContent" element={<AnalysisContent />} />
            <Route path="Analysising" element={<Analysising />} />
            <Route path="AnalysisPage" element={<AnalysisPage />} />
            <Route path="ResultPage" element={<ResultPage />} />
          </>
        ) : (
          <>
            <Route path="/" element={<LaunchScreen />} />
            <Route path="/Login" element={<Login />} />
            <Route path="Join" element={<Join />} />
          </>
        )}
      </Routes>
    </div>
  );
}
