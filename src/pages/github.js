import React, { useState, useEffect } from 'react'
import { Link } from "gatsby"
import Layout from '../components/layout'
import "../styles/github.scss"
import folder from "../images/gfolder.svg"
import github from "../images/github.png"
import AppleFace from "../images/apple-face.png"
import { variants, item } from "../variants/variants"
import { motion } from 'framer-motion'

const GitHub = () => {
 const [repo, setRepo] = useState([])

  useEffect(() => {
    fetch("https://api.github.com/users/Ranganath-MD/repos")
    .then(response => response.json())
    .then(result => {
      if(result){
        const publicrepo = result.filter(repo => repo.fork !== true && repo.name !== "Ranganath-MD")
        setRepo(publicrepo)
      }
    })
    .catch(error => console.log(error))
  }, [])

  // const repodata = data.allCustomApi.nodes
  return (
    <Layout>
      <motion.div 
        variants={variants}
        initial="hidden"
        animate="show"
        className="git-container"
      >
        <div className="email">
          <span className="line"></span>
          <span><a className="email-link" href = "mailto: ranganath.developer@gmail.com">ranganath.developer@gmail.com</a></span>
        </div>
        <div className="menu-options">
          <span><Link to="/about-me">About Me</Link></span>
          <span><Link to="/my-work">My work</Link></span>
        </div>
        <motion.h1 variants={item}>Something I have built</motion.h1>
        <motion.div variants={item} className="banner">
          <img src={AppleFace} alt="apple face" />
        </motion.div>
        <motion.div variants={item} className="repo-list">
          {
            repo.map(repo => {
              return(
                <motion.div className="repo-card" key={repo.id}>
                  <div className="card-header">
                    <div className="folder-icon">
                      <img src={folder} alt="folder" />
                    </div>
                    <div className="git-code">
                        <a href={repo.html_url} target="_blank" rel="noreferrer">
                          <img src={github} alt="folder" />
                        </a>
                    </div>
                  </div>
                  <span>{repo.name}</span>
                  <p>{repo.description}</p>
                </motion.div>
              )
            })
          }
        </motion.div>
        <motion.div variants={item} className="button">
          <a href="https://github.com/Ranganath-MD?tab=repositories" target="_blank" rel="noreferrer">
            <button>Find More on GitHub</button>
          </a>
        </motion.div>
      </motion.div>
    </Layout>
  )
}

export default GitHub