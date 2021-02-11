

import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogNavigation from "../components/blog-navigation"
import ArticlePreview from "../components/article-preview"

const BlogPage = () =>  (
 
 <body class="page-blog">
    <Layout>
      <SEO title="Home" />
      <BlogNavigation />
      <div class="article-grid">
        <article class="article-preview article-preview--featured">
          <img src="img/blog-1.svg" alt="electric drill" />
          <h3>
            <a href="#">Lorem ipsum dolor sit amet, consectet adipiscing</a>
          </h3>
          <p>Lorem ipsum dolor sit amet, consectet adipiscing</p>
          <div class="info">
            <time datetime="2020-10-08">Oct 8</time>
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
  </body>
)


export default BlogPage
