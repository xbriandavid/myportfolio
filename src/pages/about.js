import React from 'react'
import SEO from "../components/seo"
import Header from '../components/header'

const about = () => {
    return (
        <div>
            <SEO title = "About"/>
            <Header navLabel = "home" toAddress = "/"/>
        </div>
    )
}

export default about 