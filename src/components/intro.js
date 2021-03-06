/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {IoLogoLinkedin, IoLogoGithub} from "react-icons/io"
import Header from "./header"
import "./layout.css"

const Intro = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div id = "first-container"style={{
      height:'100vh'
    }}>
      <Header siteTitle={data.site.siteMetadata.title} 
              navLabel = "about"
              toAddress = "/about/"/>
      
      <div id = "intro-container">
        <main style = {{overflowWrap:'normal'}}>{children}</main>
      </div>

      
      <div id = "button-cloud">
        <div id = "linkedin-button">
          <a style={{color:'inherit'}}href="https://www.linkedin.com/in/briandavid8/" target="_blank" rel="noopener noreferrer">
            <IoLogoLinkedin />
          </a>
        </div>
        <div id="github-button">
          <a style={{color:'inherit'}} href="https://github.com/xbriandavid" target="_blank" rel="noopener noreferrer">
          <IoLogoGithub />
          </a>
        </div>
      </div>
      <div id ="mobile-about-me">
        <a href="/about/" style={{textDecoration: "none", color:'#000000'}}>
          <span>About me</span>
        </a>
      </div>
    </div>
  )
}

Intro.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Intro
