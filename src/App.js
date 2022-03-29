import React, { useState } from "react";
import Header from "./Header/Header";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import Pomades from "./Pages/Pomades";
import Admin from "./Pages/Admin";
import Layout from "./Pages/Layout";
import SinglePomade from "./Pages/SinglePomade";
import NoMatch from "./Pages/NoMatch";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pomades">
            <Route index element={<Pomades />} />
            {/* <Route path="*" element={<NoMatch />} /> */}
            <Route path=":pomadeID" element={<SinglePomade />} />
          </Route>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
