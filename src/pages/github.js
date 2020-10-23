import React from 'react'
import { Link } from "gatsby"
import Layout from '../components/layout'
import "../styles/github.scss"
import folder from "../images/gfolder.svg"
import github from "../images/github.png"
import AppleFace from "../images/apple-face.png"
import { useStaticQuery, graphql } from "gatsby"

const GitHub = () => {
  const data = useStaticQuery(graphql`
    {
      allCustomApi(filter: {fork: {eq: false}}, limit: 20) {
        nodes {
          id
          name
          url
          description
          html_url
          id
          language
        }
      }
    }
  `)

  const repodata = data.allCustomApi.nodes
  return (
    <Layout>
      <div className="git-container">
        <div className="email">
          <span className="line"></span>
          <span><a className="email-link" href = "mailto: ranganath.developer@gmail.com">ranganath.developer@gmail.com</a></span>
        </div>
        <div className="menu-options">
          <span><Link to="/about-me">About Me</Link></span>
          <span><Link to="/my-work">My work</Link></span>
        </div>
        <h1>Something I have built</h1>
        <div className="banner">
          <img src={AppleFace} alt="apple face" />
        </div>
        <div className="repo-list">
          {
            repodata.map(repo => {
              return(
                <div className="repo-card" key={repo.id}>
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
                </div>
              )
            })
          }
        </div>
        <div className="button">
          <a href="https://github.com/Ranganath-MD?tab=repositories" target="_blank" rel="noreferrer">
            <button>Find More in GitHub</button>
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default GitHub