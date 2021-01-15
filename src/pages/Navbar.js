import React, { useState } from "react"
import { Link } from "react-router-dom"
import InstagramIcon from "@material-ui/icons/Instagram"
import DehazeIcon from "@material-ui/icons/Dehaze"
import "./styles/Navbar.css"

function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          tUD
          <InstagramIcon />
        </Link>
        <DehazeIcon
          fontSize="large"
          className="menu-icon"
          onClick={handleClick}
        ></DehazeIcon>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
