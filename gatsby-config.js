module.exports = {
  siteMetadata: {
    title: `Ranganath`,
    short_description: `I build things for web`,
    description: `I am Fullstack web developer based in Bangalore, specializing in building exceptional websites, application`,
    author: `Ranganath`,
    keyword: ["Ranganath portfolio", "react js developer", "node js developer", "fullstack developer", "developer in Bangalore", "javascript"],
    github: "https://github.com/Ranganath-MD",
    gitImage: "/images/new-github.svg",
    linkedin: "https://www.linkedin.com/in/ranganathmd/",
    linkedinImage: "/images/new-linkedin.svg",
    facebook: "https://www.facebook.com/ranganath.m.908/",
    fbImage: "/images/fb.svg",
    codesandbox: "https://codesandbox.io/u/Ranganath-MD",
    codesandboxImage: "/images/codesandbox.svg",
    gmail: "ranganath.developer@gmail.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
