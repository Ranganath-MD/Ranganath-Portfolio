import React from 'react'
import { Link } from 'gatsby'
import "../styles/intro.scss"

const Menu = () => {
  return (
    <div className="menu">
      {/* <Link to="/hire-me" >Hire Me </Link> */}
      <Link to="/about-me" >About Me</Link>
      <Link to="/my-work" >My Work</Link>
      <Link to="/github" >Github</Link>
      <Link to="/contact-me" >Contact Me</Link>
    </div>
  )
}

export default Menu
