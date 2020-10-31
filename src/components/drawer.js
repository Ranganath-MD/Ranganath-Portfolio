import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import { Link } from 'gatsby';
import useWindowsize from "../hooks/useWindowsize"
const DrawerComponent = ({ open, handleDrawer }) => {
  const { width } = useWindowsize()
  return (
    <>
      <Drawer 
        anchor={width > 768 ? "top": "left"} 
        open={open} 
        onClose={handleDrawer}
        className="drawer"
        transitionDuration={500}
      >
            <button 
              className="close-button"
              onClick={handleDrawer}
            >
              close
            </button>
            <div className="drawer-menu">
                <Link to="/about-me" >About Me</Link>
                <Link to="/my-work" >My Work</Link>
                <Link to="/github" >Github</Link>
            </div>
      </Drawer>
    </>
  )
}

export default DrawerComponent
