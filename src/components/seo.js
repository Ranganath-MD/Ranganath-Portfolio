
import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ meta, lang, title, schemaMarkup }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          keywords
          author
        }
      }
    }
  `)

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: data.site.siteMetadata.description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `keywords`,
          content: data.site.siteMetadata.keywords
        },
        {
          property: `og:description`,
          content: data.site.siteMetadata.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: data.site.siteMetadata.author,
        }
      ].concat(meta)}
    >
      {
        schemaMarkup && 
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      }
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default SEO
