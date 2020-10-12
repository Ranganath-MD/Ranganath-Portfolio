import React from 'react'
import GitHub from "../images/new-github.svg"
import Codesandbox from "../images/codesandbox.svg"
import Linkedin from "../images/new-linkedin.svg"
import Facebook from "../images/fb.svg"
import "../styles/intro.scss"

const SocialIcons = () => {
    return (
        <div className="social">
            <a href="https://github.com/Ranganath-MD" target="_blank" rel="noreferrer">
                <img src={GitHub} alt="github-imz"/>
            </a>
            <a href="https://codesandbox.io/u/Ranganath-MD" target="_blank" rel="noreferrer">
                <img src={Codesandbox} alt="csb-imz"/>
            </a>
            <a href="https://www.linkedin.com/in/ranganathmd/" target="_blank" rel="noreferrer">
                <img src={Linkedin} alt="linkedin-imz"/>
            </a>
            <a href="https://www.facebook.com/ranganath.m.908/" target="_blank" rel="noreferrer">
                <img src={Facebook} alt="fb-imz"/>
            </a>
        </div>
    )
}

export default SocialIcons