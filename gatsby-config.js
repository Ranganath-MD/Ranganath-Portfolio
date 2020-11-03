module.exports = {
  siteMetadata: {
    siteUrl: 'https://ranganathmd.netlify.app/',
    short_description: `I build things for web`,
    description: `I am a Fullstack web developer based in Bangalore specializing mostly in Javascript, React, React Native, NodeJs and Gatsby, I always after building exceptional websites, application. I have worked with some pretty exciting projects by my own and for an organization using React js and Node js. github is the place to showcase our works, love to showcase my work as well through github`,
    author: `Ranganath`,
    keywords: "javascript, React, React js, Node js, Ranganath MD, Ranganath portfolio, react js developer,fullstack developer, bengaluru, Bangalore, developer in Bangalore",

    socialicons: {
      github: "https://github.com/Ranganath-MD",
      gitImage: "https://user-images.githubusercontent.com/57658387/97781353-e5fb1f00-1b47-11eb-8daf-f021c452bce6.png",
      linkedin: "https://www.linkedin.com/in/ranganathmd/",
      linkedinImage: "https://user-images.githubusercontent.com/57658387/97781354-e5fb1f00-1b47-11eb-8fdb-17bac857085f.png",
      facebook: "https://www.facebook.com/ranganath.m.908/",
      fbImage: "https://user-images.githubusercontent.com/57658387/97781352-e5628880-1b47-11eb-9599-15f0395c3535.png",
      codesandbox: "https://codesandbox.io/u/Ranganath-MD",
      codesandboxImage: "https://user-images.githubusercontent.com/57658387/97781346-e4315b80-1b47-11eb-92e1-70b6ffbb31e9.png",
    },

    aboutme: {
      techs: ["Javascript(ES6+)", "HTML & (S)CSS", "React.js & Redux", "Gatsby.js", "Next.js"],
      exp: [
        {
          title: "Software Engineer",
          link: "https://mverve.com/",
          org: "Mverve Technologies Pvt Ltd",
          desc: [
            "Developed and maintained code for client websites primarily using HTML, CSS, Sass, JavaScript, and React js",
            "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, Gatsby, React, Strapi, Ext-React, React-Native and Netlify",
            "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
            "Developed Hybrid application using React with the help of Extjs components"
          ]
        },
        {
          title: "Full stack Developer Intern",
          link: "https://dctacademy.com/",
          org: "DCT Academy",
          desc: [
            "Learnt new technologies like Javascript, React js, and Node js",
            "Developed fullstack application using React js and Node js",
          ]
        },
        {
          title: "Scientific Data Analyst",
          link: "http://www.molecularconnections.com/",
          org: "Molecular connections",
          desc: [
            "Communicate and worked with large team of members ",
            "Maintained and extracted large amount of data for the client",
          ]
        },

      ]
    }

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ranganath MD`,
        short_name: `Ranganath`,
        start_url: `/`,
        background_color: `#040721`,
        theme_color: `#040721`,
        display: `minimal-ui`,
        icon: `src/images/logo.webp`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://ranganathmd.netlify.app/',
        sitemap: 'https://ranganathmd.netlify.app/sitemap.xml',
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
      }
    }
  ],
}
