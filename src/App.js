import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import NotFound from "./pages/error/NotFound";
import Home from "./pages/home";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Test from "./pages/auth/testSIgnUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/test" element={<Test />} />

        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
