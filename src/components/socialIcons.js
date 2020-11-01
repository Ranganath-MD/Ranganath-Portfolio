import React from 'react'
import "../styles/intro.scss"
import { useStaticQuery, graphql } from "gatsby"

const SocialIcons = () => {
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    socialicons{
                        gitImage
                        github
                        codesandbox
                        codesandboxImage
                        facebook
                        fbImage
                        linkedin
                        linkedinImage
                    }
                }
            }
        }
    `)
    const { github, gitImage, codesandbox, codesandboxImage,facebook, fbImage, linkedin, linkedinImage} = data.site.siteMetadata.socialicons
    return (
        <div className="social">
            <a href={github} target="_blank" rel="noreferrer">
                <img src={gitImage} alt="github-imz"/>
            </a>
            <a href={codesandbox} target="_blank" rel="noreferrer">
                <img src={codesandboxImage} alt="csb-imz"/>
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer">
                <img src={linkedinImage} alt="linkedin-imz"/>
            </a>
            <a href={facebook} target="_blank" rel="noreferrer">
                <img src={fbImage} alt="fb-imz"/>
            </a>
        </div>
    )
}

export default SocialIcons