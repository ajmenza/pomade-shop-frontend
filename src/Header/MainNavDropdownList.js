import React, { useEffect, useState } from "react";
import pomades from "../pomades";
import shopMenuItems from "../ui-data";
import { AiOutlineShoppingCart } from "react-icons/ai";


// const uniquePomadeTypes = (pomades) => {
//   const pomadeTypes = pomades.map((pomade) => {
//     const {type} = pomade;
//     return type;
//   });
//   console.log(pomadeTypes);
// };

// uniquePomadeTypes(pomades);

function MainNavDropdownList({ listOpen }) {
  const [open, setOpen] = useState("main-nav-close");
  const [showLinks, setShowLinks] = useState("hide-links");
  useEffect(() => {
    if (listOpen) {
      setOpen("main-nav-open");
      setShowLinks("show-links");
    } else if (!listOpen) {
      setOpen("main-nav-close");
      setShowLinks("hide-links");
    }
  }, [listOpen]);

  return (
    <ul className={`main-nav-list ${open}`}>
      {shopMenuItems.map((pomadeType, index) => {
        return (
          <li key={index} className="list-item-dropdown">
            <a href="#" className={`list-links ${showLinks}`}>
              {pomadeType}
            </a>
          </li>
        );
      })}
      <hr className={`break ${showLinks}`}/>
      <li className="list-item-dropdown cart-item">
        <a href="#" className={`list-links ${showLinks} cart-link`}>
          <span>Cart</span>
          <span className={`cart-icon ${showLinks}`}>
            <AiOutlineShoppingCart />
          </span>
        </a>
        <div className={`dot ${showLinks}`}><span>3</span></div>
      </li>
    </ul>
  );
}

export default MainNavDropdownList;
