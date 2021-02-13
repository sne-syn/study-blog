import React from 'react'
import {Link} from 'gatsby'

const BlogNavigation = () => {
  return (
    <div className="secondary-navigation">
      <ul className="categories">
        <li><button>Design</button></li>
        <li><button>Front-End</button></li>
        <li><button>Back-end</button></li>
        <li><button>Web</button></li>
        <li><button>Apps</button></li>
      </ul>
      <Link to="/" className="btn">Subscribe</Link>
    </div>
  )
}

export default BlogNavigation
