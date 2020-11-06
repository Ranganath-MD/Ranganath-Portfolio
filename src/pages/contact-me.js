import React, {useState} from 'react'
import Layout from '../components/layout'
import { Link, navigate } from "gatsby"
import "../styles/contactme.scss"
import { variants, item } from "../variants/variants"
import { motion } from 'framer-motion'
import SEO from '../components/seo'

const ContactMe = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [msg, setMsg] = useState("")
  const handleSubmit = (e) => {

    e.preventDefault()
    const formData = {
      username: name, email, subject, message
    }
    fetch("https://portfolio-ranganath.herokuapp.com/email",
    {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.json())
    .then(() => { 
          setMsg("Thanks for reaching out to me")
          setName("")
          setSubject("")
          setEmail("")
          setMessage("")
          navigate("/")
        }
    )
    .then(err => console.log(err))
    
  }

  return (
    <Layout>
      <SEO title="Contact Me - Let's talk if you have any queries"/>
      <motion.div 
        variants={variants}
        initial="hidden"
        animate="show"
        className="contactme"
      >
        <div className="email">
          <span className="line"></span>
          <span><a className="email-link" href = "mailto: ranganath.developer@gmail.com">ranganath.developer@gmail.com</a></span>
        </div>
        <div className="menu-options">
          <span><Link to="/about-me">About Me</Link></span>
          <span><Link to="/my-work">My work</Link></span>
          <span><Link to="/github">Github</Link></span>
        </div>
        <form onSubmit={handleSubmit}>
          <motion.h1 variants={item}>Let's talk</motion.h1>
          <div>
            <span>{msg}</span>
          </div>
          <motion.div variants={item}>
            <p>Name</p>
            <input 
              type="text"
              placeholder="Your name"
              name="name"
              required
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </motion.div>
          <motion.div variants={item}>
            <p>Email</p>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </motion.div>
          <motion.div variants={item}>
            <p>Subject</p>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              required
              value={subject}
              onChange={e => setSubject(e.target.value)}
            />
          </motion.div>
          <motion.div variants={item}>
            <p>Message</p>
            <textarea
              cols={10}
              minlength={20}
              rows={5}
              placeholder="What do you want to say?"
              name="message"
              required
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </motion.div>
          <motion.div variants={item}>
            <input
              type="submit"
            />
          </motion.div>
        </form>
      </motion.div>
    </Layout>
  )
}

export default ContactMe