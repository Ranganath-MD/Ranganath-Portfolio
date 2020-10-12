
import React from "react"
import Header from "./header"
import '../styles/Globalstyles.scss'
import Helmet from "react-helmet"

const Layout = ({ children }) => {

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://unpkg.com/kursor/dist/kursor.css" />
      </Helmet>
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
