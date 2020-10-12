import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WorkImage from "../images/work.png"
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
          <p>Hi, I am</p>
          <h1>Ranganath</h1>
          <p>I am a fullstack web developer</p> 
          <p>specializing in building exceptional websites and application</p>
          <button>Download CV</button>
        </div>
      </div>
      <div className="img-container">
        <img src={WorkImage} alt="ninja" />
      </div>
      <div className="menu-container">
        <Menu />
      </div>
    </div>
  </Layout>
  )
}

export default IndexPage
