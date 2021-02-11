import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header className="primary-header">
    <div className="primary-header__inner">
      <p className="logo page-intro">sne_syn</p>
      <nav className="primary-nav">
        <ul className="primary-nav__list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog/">Blog</Link></li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
