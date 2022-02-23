import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import MainNavDropdownList from "./MainNavDropdownList";


function MainNavDropdown() {
  const [listOpen, setListOpen] = useState(false);
  return (
    <nav className="main-nav">
      <div className="shop">
        <button className="shop-btn" onClick={() => setListOpen(!listOpen)}>
          <h2 className="nav-heading">Shop</h2>
          <span className="chevron">
            <FaChevronDown />
          </span>
        </button>
      </div>
      <MainNavDropdownList listOpen={listOpen} />
    </nav>
  );
}

export default MainNavDropdown;
