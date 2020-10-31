import React from 'react'
import Layout from '../components/layout'
import Profile from "../images/profile.jpg"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import "../styles/aboutus.scss"
import { item, variants } from '../variants/variants'

const AboutMe = () => {
  return (
    <Layout>
        <div className="main-container">
          <div className="email">
            <span className="line"></span>
            <span><a className="email-link" href = "mailto: ranganath.developer@gmail.com">ranganath.developer@gmail.com</a></span>
          </div>
          <div className="menu-options">
            <span><Link to="/github">Github</Link></span>
            <span><Link to="/my-work">My work</Link></span>
          </div>
          <motion.div 
            variants={variants} 
            initial="hidden"
            animate="show"
            className="container"
          >
            <motion.h1 variants={item}>About Me</motion.h1>
            <motion.div variants={item} className="profile-img">
              <img src={Profile} alt="profile" />
            </motion.div>
            <motion.div className="description">
              <motion.div variants={item}>
                  <p>Hello! I'm <b>Ranganath MD</b> a Software Engineer based in Bengaluru, KA.</p>
                  <p>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.</p>
                  <p>Here are a few technologies I've been working with recently:</p>
              </motion.div>
              <motion.div variants={item} className="techs">
                  <span> Javascript(ES6+)</span>
                  <span> HTML & (S)CSS</span>
                  <span> React js & Redux</span>
                  <span> Gatsby js</span>
                  <span> Node js</span>
                  <span> Next js</span>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div 
            variants={variants} 
            initial="hidden"
            animate="show"
            className="work-container">
            <motion.h1 variants={item}>My Work Experience</motion.h1>
            <div>
              <motion.span variants={item}>Software Engineer</motion.span> 
              <motion.span variants={item}><a href="https://mverve.com/" target="_blank" rel="noreferrer"> @ Mverve Technologies Pvt Ltd</a></motion.span>
              <motion.ul variants={item}>
                <li>Developed and maintained code for client websites primarily using HTML, CSS, Sass, JavaScript, and React js</li>
                <li>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, Gatsby, React, Strapi, Ext-React, React-Native and Netlify</li>
                <li>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</li>
                <li>Developed Hybrid application using React with the help of Extjs components</li>
              </motion.ul>
            </div>
            <div>
              <motion.span variants={item}>Full stack Developer Intern</motion.span> <motion.span variants={item}><a href="https://dctacademy.com/" target="_blank" rel="noreferrer">@ DCT Academy</a></motion.span>
              <motion.ul variants={item}>
                <li>Learnt new technologies like Javascript, React js, and Node js </li>
                <li>Developed fullstack application using React js and Node js</li>
              </motion.ul>
            </div>
            <div>
              <motion.span variants={item}>Scientific Data Analyst</motion.span> <motion.span variants={item}><a href="http://www.molecularconnections.com/" target="_blank" rel="noreferrer">@ Molecular connections</a></motion.span>
              <motion.ul variants={item}>
                <li>Communicate and worked with large team of members </li>
                <li>Maintained and extracted large amount of data for the client</li>
              </motion.ul>
            </div>
          </motion.div>
        </div>
    </Layout>
  )
}

export default AboutMe
