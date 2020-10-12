import React from 'react'
import { Link } from 'gatsby'
import "../styles/intro.scss"

const Menu = () => {
  return (
    <div className="menu">
      <Link to="/hire-me" activeClassName="">Hire Me </Link>
      <Link to="/my-work" activeClassName="">My work</Link>
      <Link to="/github" activeClassName="">GitHub</Link>
      <Link to="/about-me" activeClassName="">About Me</Link>
    </div>
  )
}

export default Menu
