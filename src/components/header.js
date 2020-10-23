import { Link } from "gatsby"
import React from "react"
import Logo from "../images/logo.png"
import Menu from "../images/menuicon.svg"

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Ranganath-portfolio-logo"/>
        </Link>
      </div>
      <div className="menu" >
        <img src={Menu} alt="hamburger-menu"/>
      </div>
    </div>
  )
}



export default Header
