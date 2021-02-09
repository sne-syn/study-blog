import React from 'react';

const ArticlePreview = () => {
  return (
    <article class="article-preview flow-content">
        <img src="img/blog-6.svg" alt="electric drill">
        <h3><a href="#">Lorem ipsum dolor sit amet, consectet adipiscing</a></h3>
        <p>Lorem ipsum dolor sit amet, consectet adipiscing</p>
        <div class="info">
          <time datetime="2020-10-08">Oct 8</time>
          <p>8 min read</p>
        </div>
     </article>
  )
}

export default ArticlePreview;
