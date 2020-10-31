import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/404.scss"
import { motion } from "framer-motion"
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="not-found-container">
      <div>
        <motion.div className="text">
          <motion.h1 
            animate={{
              y: [-30, 30, -30, 30, -30]
            }}
            transition={{
              delay: 0.2,
              duration: 5,
              loop: Infinity,
            }}>4</motion.h1>
          <motion.h1 
            animate={{
              y: [-30, 30, -30, 30, -30]
            }}
            transition={{
              duration: 5,
              loop: Infinity,
              delay: 0.6
            }}>0</motion.h1>
          <motion.h1 
            animate={{
              y: [-30, 30, -30, 30, -30]
            }}
            transition={{
              duration: 5,
              loop: Infinity,
              delay: 1
            }}>4</motion.h1>
          </motion.div>
        <p>The page you are looking is not exists, <Link to="/">Click here</Link> to go back to home page</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
