import React from 'react'
import Intro from "../components/intro"
import SEO from "../components/seo"

const about = () => {
    return (
        <Intro>
            <SEO title = "About"/>
            <div>
                <h1>About Me</h1>
            </div>
        </Intro>
    )
}

export default about