import React from 'react'

const LatestArticles = () => {
  return (
    <section className="recent-articles bg-primary-300">
    <div className="container u-padding-x">
      <header>
        <h2 className="section-title">Blog</h2>
        <p className="section-subtitle">Latest thoughts, news and ideas</p>
      </header>

      <div className="split xl-space">
        <article className="article-preview flow-content">
          <a href="#" className="flow-content">
            <img src="img/blog-1.svg" alt="electric drill" />
            <h3>Lorem ipsum dolor sit amet, consectet adipiscing</h3>
            <p>Lorem ipsum dolor sit amet, consectet adipiscing</p>
          </a>
          <div className="article-preview__info">
            <time datetime="2020-10-08">Oct 8</time>
            <p>8 min read</p>
          </div>
        </article>
        <article className="article-preview flow-content">
          <a href="#" className="flow-content">
            <img src="img/blog-2.svg" alt="cactus" />
            <h3>Lorem ipsum </h3>
            <p>Lorem ipsum dolor sit amet, consectet adipiscing</p>
          </a>
          <div className="article-preview__info">
            <time datetime="2020-10-08">Oct 8</time>
            <p>8 min read</p>
          </div>
        </article>
        <article className="article-preview flow-content">
          <a href="#" className="flow-content">
            <img src="img/blog-3.svg" alt="insulated water bottle" />
            <h3>Lorem ipsum dolor sit amet, consectet adipiscing</h3>
            <p>Lorem ipsum dolor sit amet, consectet adipiscing</p>
          </a>
          <div className="article-preview__info">
            <time datetime="2020-10-08">Oct 8</time>
            <p>8 min read</p>
          </div>
        </article>
      </div>
    </div>
  </section>
  )
}

export default LatestArticles
