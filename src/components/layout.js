
import React from "react"
import Header from "./header"
import '../styles/Globalstyles.scss'

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
        <footer>
          Made With 🧡
        </footer>
      </div>
    </>
  )
}

export default Layout
