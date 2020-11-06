import React from 'react'
import Layout from '../components/layout'
import { Link } from "gatsby"
import { motion } from "framer-motion"
import "../styles/aboutus.scss"
import { item, variants } from '../variants/variants'
import SEO from '../components/seo'
import { useStaticQuery, graphql } from "gatsby"

const AboutMe = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          aboutme {
            techs
            exp {
              desc
              link
              title
              org
            }
          }
        }
      }
    }
  `)

  const { techs, exp } = data.site.siteMetadata.aboutme

  return (
    <Layout>
      <SEO 
        title="About Me - Who am I? and where I have worked"
      />
        <div className="main-container">
          <div className="email">
            <span className="line"></span>
            <span><a className="email-link" href = "mailto: ranganath.developer@gmail.com">ranganath.developer@gmail.com</a></span>
          </div>
          <div className="menu-options">
            <span><Link to="/github">Github</Link></span>
            <span><Link to="/my-work">My work</Link></span>
            <span><Link to="/contact-me">Contact Me</Link></span>
          </div>
          <motion.div 
            variants={variants} 
            initial="hidden"
            animate="show"
            className="container"
          >
            <motion.h1 variants={item}>About Me</motion.h1>
            <motion.div variants={item} className="profile-img">
              <img src="https://avatars1.githubusercontent.com/u/57658387?s=460&u=173856ff2b12a03e9d469b6066e12070c0ca6b6c&v=4" alt="profile" />
            </motion.div>
            <motion.div className="description">
              <motion.div variants={item}>
                  <p>Hello! I'm Ranganath MD a Software Engineer based in Bengaluru, KA.</p>
                  <p>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.</p>
                  <p>Here are a few technologies I've been working with recently:</p>
              </motion.div>
              <motion.div variants={item} className="techs">
                {
                  techs.map(tech => {
                    return <span key={tech}>{tech}</span>
                  })
                }
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div 
            variants={variants} 
            initial="hidden"
            animate="show"
            className="work-container">
            <motion.h2 variants={item}>My Work Experience</motion.h2>
            {
              exp.map(work => {
                return (
                  <div>
                    <motion.span variants={item}>{work.title}</motion.span> 
                    <motion.span variants={item}><a href={work.link} target="_blank" rel="noreferrer"> @ {work.org}</a></motion.span>
                    <motion.ul variants={item}>
                      {
                        work.desc.map((d, i)=> {
                          return <li key={i}>{d}</li>
                        })
                      }
                    </motion.ul>
                  </div>
                )
              })
            }
            
          </motion.div>
        </div>
    </Layout>
  )
}

export default AboutMe
