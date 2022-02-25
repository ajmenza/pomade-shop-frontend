import React, { useState } from "react";
import Carousel from "./Carousel";
import Header from './Header/Header'
import logo from "./logo.svg";


function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}



function Main() {
  return (
    <main>
      <Carousel />
    </main>
  );
}

export default App;
