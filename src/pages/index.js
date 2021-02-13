import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogNavigation from "../components/blog-navigation"
import About from "../components/about"
import LatestArticles from "../components/latest-articles"

const IndexPage = ({ data }) => (
 <section className="page-home">
  <Layout>
    <SEO title="Home" />
    <BlogNavigation />
    <section>
    <About />
    </section>
    <LatestArticles />
  </Layout>
  </section>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            description
            title
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
