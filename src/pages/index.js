import React from "react"
//import { Link } from "gatsby"
import "../components/layout.css"
import Intro from "../components/intro"
import SEO from "../components/seo"
import NameDisplay from "../components/namedisplay"
import Portfoliodisplay from '../components/portfoliodisplay'
//import Positions from '../components/positions'
import $ from 'jquery'


const IndexPage = () => (
  <div id="index-page">
    <Intro>
      <SEO title="Brian David" />
      <NameDisplay />
    </Intro>
    <Portfoliodisplay />
  </div>
)

export default IndexPage
