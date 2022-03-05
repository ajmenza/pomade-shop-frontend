import React, { useState } from "react";
import Header from "./Header/Header";
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import Pomades from "./Pages/Pomades";
import Admin from "./Pages/Admin"

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/pomades" element={<Pomades/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
