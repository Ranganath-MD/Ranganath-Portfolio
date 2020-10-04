module.exports = {
  siteMetadata: {
    title: `Ranganath`,
    short_description: `I build things for web`,
    description: `I am Fullstack web developer based in Bangalore, specializing in building exceptional websites, application`,
    author: `Ranganath`,
    techs: [
      { id: 1, tech: "Javascript(ES6+)", icon: ""},
      { id: 2, tech: "React js", icon: ""},
      { id: 3, tech: "Node js", icon: ""},
      { id: 4, tech: "HTML", icon: ""},
      { id: 5, tech: "css/scss", icon: ""},
      { id: 6, tech: "Gatsby", icon: ""}
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
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
