import React from 'react'
import {Link} from 'gatsby'

const BlogNavigation = () => {
  return (
    <div class="secondary-navigation">
      <ul class="categories">
        <li><button>Design</button></li>
        <li><button>Front-End</button></li>
        <li><button>Back-end</button></li>
        <li><button>Web</button></li>
        <li><button>Apps</button></li>
      </ul>
      <Link to="/" class="btn">Subscribe</Link>
    </div>
  )
}

export default BlogNavigation
