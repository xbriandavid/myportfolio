import React from "react"
//import { Link } from "gatsby"

import Intro from "../components/intro"
import SEO from "../components/seo"
import NameDisplay from "../components/namedisplay"
import Portfoliodisplay from '../components/portfoliodisplay'
import Positions from '../components/positions'

const IndexPage = () => (
  <div id="index-page">
    <Intro>
      <SEO title="Brian David" />
      <NameDisplay />
    </Intro>
  </div>
)

export default IndexPage
