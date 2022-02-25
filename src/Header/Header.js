import React from "react";
import '../Header/Header.css';
import MainNavDropdown from "./MainNavDropdown";

function Header() {
  return (
    <>
      <header>
        <div className='logo'>
          <h1>Pomade</h1>
        </div>
        <MainNavDropdown />
      </header>
    </>
  );
}

export default Header;

