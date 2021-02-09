import React from 'react';
import Layout from '../components/layout';
import Header from '../components/header';
import LatestArticles from'../components/latest-articles';

const Article = () => {
  return (
    <body class="page-article">
    <Layout>
      <article class="xl-space article-full flow-content">
    <h2>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor
      incididunt
      ut labore et dolore
      magna.</h2>
    <p>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna.</p>
    <h3>Part 1</h3>
    <p>Latest thoughts, news and ideas</p>
    <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
      aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
      Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
      dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit
      amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et
      dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
      suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea
      voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla
      pariatur?</p>
    <img src="img/article-1.svg" alt="">
    <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
      aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
    <h3>Part 2</h3>
    <p>Latest thoughts, news and ideas</p>
    <img src="img/article-2.svg" alt="">
    <p>Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
      dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit
      amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et
      dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
      suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea
      voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla
      pariatur?</p>
    </article>
    <LatestArticles />
    </Layout>   
    </body>
  )
}

export default Article;
