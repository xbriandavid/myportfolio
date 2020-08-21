//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./layout.css"

const Header = ({ siteTitle }) => (
  <header>
    <div class = "grid">
      <div></div>
      <div style = {{transform: 'translateY(35%)'}}>
        <h3 id = "about-me-link">About Me</h3>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
