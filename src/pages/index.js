import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NinjaImage from "../images/ninja.png"
import SocialIcons from "../components/socialIcons"
import Menu from "../components/menu"

import "../styles/intro.scss"

const IndexPage = () => {
  return(
    <Layout>
    <SEO title="Introduction"/>
    <div className="index-container">
      <div className="social-container">
        <SocialIcons />
      </div>
      <div className="intro-container">
        <div>
          <p>Hi, My name is</p>
          <h1>Ranganath</h1>
          <p>I'm a fullstack web developer based in Bengaluru specializing in building exceptional websites and applications.</p>
         
          <button>Download CV</button>
        </div>
      </div>
      <div className="img-container">
        <img src={NinjaImage} alt="ninja" />
      </div>
      <div className="menu-container">
        <Menu />
      </div>
    </div>
  </Layout>
  )
}

export default IndexPage
