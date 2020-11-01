import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NinjaImage from "../images/ninja.png"
import SocialIcons from "../components/socialIcons"
import Menu from "../components/menu"
import Resume from "../data/ranganath_reactjs.pdf"
import "../styles/intro.scss"
import { motion } from "framer-motion"
import { variants, img_variants, item } from "../variants/variants"

const IndexPage = () => {
  return(
    <Layout>
    <SEO 
      title="Ranganath"
      description="React js and Node js developer based in bangalore"
    />
    <div className="index-container">
      <div className="social-container">
        <SocialIcons />
      </div>
      <div className="intro-container">
        <motion.div 
          variants={variants}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={item}>Hi, My name is</motion.p>
          <motion.h1 variants={item}>Ranganath</motion.h1>
          <motion.p variants={item}>I'm a fullstack web developer based in Bengaluru specializing in building exceptional websites and applications.</motion.p>
          <motion.button variants={item}>
            <a href={Resume} download="Ranganath_resume.pdf"> Download Resume </a>
          </motion.button>
        </motion.div>
      </div>
      <motion.div 
         variants={img_variants}
         initial="hidden"
         animate="show"
         className="ninja-img"
      >
        <motion.img src={NinjaImage} alt="ninja" />
      </motion.div>
      <div className="menu-container">
        <Menu />
      </div>
    </div>
  </Layout>
  )
}

export default IndexPage
