import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./layout.css"

const Header = ({navLabel, toAddress}) => (
  <header>
    <div className = "grid">
      <div className = "fillerDiv"></div>
      <div id="about-me-link">
        <Link to={toAddress} style={{textDecoration:'none'}}>
        <h3 id="about-link">{navLabel}</h3>
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  navLabel:PropTypes.string.isRequired,
  toAddress:PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  navLabel:''
}


export default Header
