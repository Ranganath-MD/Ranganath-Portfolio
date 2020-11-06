
import React from "react"
import Header from "./header"
import '../styles/Globalstyles.scss'
import Helmet from "react-helmet"
import Network from "./networkStatus"
import {useCaptureResize} from "../hooks/usewindowResize"

const Layout = ({ children }) => {
  const resize = useCaptureResize()
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://unpkg.com/kursor/dist/kursor.css" />
      </Helmet>
      <Network />
      <div>
        {
          resize && <div className="window-resize">
            <p>Resizing....</p>
          </div>
        }
      </div>
      <Header />
      <div>
        <main>{children}</main>
        {/* <footer>
          Made With 🧡
        </footer> */}
      </div>
    </>
  )
}

export default Layout
