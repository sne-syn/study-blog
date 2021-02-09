import React from 'react';
import ArticlePreview from './article-preview';

const LatestArticles = () => {
  return (
    <section className="recent-articles bg-primary-300">
      <div className="container u-padding-x">
        <header>
          <h2 className="section-title">Blog</h2>
          <p className="section-subtitle">Latest thoughts, news and ideas</p>
        </header>
        <div className="split xl-space">
          <ArticlePreview />
          <ArticlePreview />
          <ArticlePreview />
        </div>
      </div>
    </section>
  )
}

export default LatestArticles
