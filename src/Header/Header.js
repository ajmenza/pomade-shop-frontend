import React from "react";
import '../Header/Header.css';
import MainNavDropdown from "./MainNavDropdown";
import { Link } from "react-router-dom";
import { GrUserAdmin } from "react-icons/gr";

function Header() {
  return (
    <>
      <header>
          <Link to={'/'} className="logo">
            <h1>Pomade</h1>
          </Link>

        <MainNavDropdown />
      </header>
      <Link to={'/admin'}>
        <GrUserAdmin className="admin-btn"/>
      </Link>
    </>
  );
}

export default Header;

