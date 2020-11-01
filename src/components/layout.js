
import React from "react"
import Header from "./header"
import '../styles/Globalstyles.scss'
import Helmet from "react-helmet"
import Network from "./networkStatus"
const Layout = ({ children }) => {

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://unpkg.com/kursor/dist/kursor.css" />
      </Helmet>
      <Network />
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
