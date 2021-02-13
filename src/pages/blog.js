

import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogNavigation from "../components/blog-navigation"
import ArticlePreview from "../components/article-preview"

const BlogPage = () =>  (
 
 <section className="page-blog">
    <Layout>
      <SEO title="Home" />
      <BlogNavigation />
      <div className="article-grid">
        <article className="article-preview article-preview--featured">
          <img src="img/blog-1.svg" alt="electric drill" />
          <h3>
            <a href="#">Lorem ipsum dolor sit amet, consectet adipiscing</a>
          </h3>
          <p>Lorem ipsum dolor sit amet, consectet adipiscing</p>
          <div className="info">
            <time dateTime="2020-10-08">Oct 8</time>
            <p>8 min read</p>
          </div>
        </article>
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
      </div>
    </ Layout>
  </section>
)


export default BlogPage
