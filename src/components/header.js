import React, {useState} from "react"
import { Link } from "gatsby"
import Logo from "../images/logo.webp"
import Menu from "../images/newmenu.webp"
import DrawerComponent from "./drawer"

const Header = () => {
  const [open, setOpen] = useState(false)
  
  const handleDrawer = () => {
    setOpen(!open)
  }

  return (
    <div className="header">
      <DrawerComponent open={open} handleDrawer={handleDrawer}/>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Ranganath-portfolio-logo"/>
        </Link>
      </div>
      <button className="menu" onClick={() => setOpen(true)}>
        <img src={Menu} alt="hamburger-menu"/>
      </button>
    </div>
  )
}



export default Header
