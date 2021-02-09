import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import EmailSubscribe from './email-subscribe'
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
        <main>
          {children}
        <EmailSubscribe />
        </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
