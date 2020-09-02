import React from 'react'

const NameDisplay = () => {
    return (
        <div>
            <div id="name-display">
                <h4 id = 'opening-intro'>
                    <span>hi i'm </span>
                    <span style={{color:'#41AAC4'}}>brian!</span>
                </h4>
                <h4 id = "opening-intro-mobile">hi!</h4>
                <h4 id = "opening-intro-mobile">i'm brian</h4>
            </div>
            <div id="opening-desc">
                <h4 id = 'opening-caption'>I love poking around data, creating awesome data
                visualizations, and discovering actionable insights! I also love food <span role="img" aria-label="cake">🍰</span>.</h4>
            </div>
        </div>
    )
}

export default NameDisplay