
import React from "react"
import Header from "./header"
import '../styles/Globalstyles.scss'
import Helmet from "react-helmet"
import { useNetworkStatus } from "../hooks/networkStatus";

const Layout = ({ children }) => {
  const [online, status, setOnline] = useNetworkStatus();

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
                <p>Your are back {status}</p>
                <div>
                  <button 
                    className="network-close-btn"
                    onClick={() => setOnline(undefined)}
                  >
                    <span role="img">❌</span>
                  </button>
                </div>
                </div> : <div className="network-inner-container">
                <p>The internet connection appears to be {status}, check your internet connection</p>
                <div>
                  <button 
                    className="network-close-btn"
                    onClick={() => setOnline(undefined)}
                  >
                    <span role="img">❌</span>
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
