
import React, { useState, useEffect } from "react"
import Header from "./header"
import '../styles/Globalstyles.scss'
import Helmet from "react-helmet"
import { useNetworkStatus } from "../hooks/networkStatus";

const Layout = ({ children }) => {
  const [online, status, setOnline] = useNetworkStatus();
  const [show, setShow] = useState(true)


  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://unpkg.com/kursor/dist/kursor.css" />
      </Helmet>
      <Header />
      <div>
        <div 
          className={online ? "online" : "offline"} 
          style={{ display: online !== undefined ? "block": "none"}} >
            {
              online ? <div className="network-inner-container">
                <p>Your are back online</p>
                <div>
                  <button 
                    className="network-close-btn"
                    onClick={() => setOnline(undefined)}
                  >
                    <span role="image">❌</span>
                  </button>
                </div>
                </div> : <div className="network-inner-container">
                <p>The internet connection appears to be offline, check your internet connection</p>
                <div>
                  <button 
                    className="network-close-btn"
                    onClick={() => setOnline(undefined)}
                  >
                    <span role="image">❌</span>
                  </button>
                </div>
                </div> 
            }
        </div>
        <main>{children}</main>
        {/* <footer>
          Made With 🧡
        </footer> */}
      </div>
    </>
  )
}

export default Layout
