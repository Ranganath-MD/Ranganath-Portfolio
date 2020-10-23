import React from 'react'
import { Link } from 'gatsby'
import "../styles/intro.scss"

const Menu = () => {
  return (
    <div className="menu">
      {/* <Link to="/hire-me" >Hire Me </Link> */}
      <Link to="/about-me" >About Me</Link>
      <Link to="/my-work" >My work</Link>
      <Link to="/github" >GitHub</Link>
    </div>
  )
}

export default Menu
