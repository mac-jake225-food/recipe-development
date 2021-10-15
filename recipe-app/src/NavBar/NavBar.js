import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { GiChefToque } from "react-icons/gi";
import { IconContext } from "react-icons/lib";

function Navbar() {
  
  {
    /* 
  Multi
  line
  comment
*/
  }
  {
    /* 
    Each state hold the initial information regarding an element componenet i.e the button component
    When we change the state, i.e a function (click) react updates the state and conintinues on until state is triggered
    again
     */
  }
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  
  // /* have to figure out how to implement the useEffect of the button showing and resixzing for mobible screens */
  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    return {
        // window.removeEventListener('resize', showButton)
    };
  }, []); 

  return (
    <>
      <IconContext.Provider value={{ color: "gray" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <GiChefToque className="navbar-icon" />
              Recipe Notebook
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Recipes"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Recipes
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Calendar"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Calendar
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/ProfileDiet"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Profile
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/sign-up" className="btn-link">
                    <Button buttonStyle="btn--outline">SIGN UP</Button>
                  </Link>
                ) : (
                  <Link to="/sign-up" className="btn-link">
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                      onClick={closeMobileMenu}
                    >
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
