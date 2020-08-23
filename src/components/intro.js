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
      <Header siteTitle={data.site.siteMetadata.title} />
      
      <div
        id = "intro-container"
      >
        <main style = {{overflowWrap:'normal'}}>{children}</main>
      </div>

      
      <div id = "button-cloud">
        <div id = "linkedin-button" style = {{
          position:'absolute',
          left:'87.29%',
          right:'7.71%',
          top:'57%',
          marginTop:'-115px',
        }}>
          <IoLogoLinkedin />
        </div>
        <div id = "github-button" style = {{
          position:'absolute',
          left:'75.56%',
          right:'19.44%',
          top:'57%',
          marginTop:'-115px'
        }}>
          <IoLogoGithub />
        </div>
      </div>
    </div>
  )
}

Intro.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Intro
