import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/intro.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Introduction"/>
    <div className="index-container">
      <div className="intro-container">
        <h1>Details</h1>
      </div>
      <div className="model-container">
        <h1>Model</h1>
      </div>
    </div>
  </Layout>
)

export default IndexPage
