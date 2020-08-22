import React from 'react'
import covid from '../images/covprj.png'
import waterProject from '../images/waterprj.png'
import predpreysim from '../images/predprayprj.png'
import devinnunes from '../images/devinnunes.png'
const Portfoliodisplay = () => {
    return (
        <div>
            <hr className="rounded"/>
            <div id="portfolio-display">
                <div id = "portfolio-grid">
                    <div className="portfolio-item">
                        <div className="portfolio-item-grid">
                            <div>
                                <img src={covid} alt="covid19proj" height="300" width="450"/>
                            </div>
                            <div className="protfolio-item-desc">
                                <div style={{paddingLeft:'0.5em', marginTop:'5px'}}>
                                    <span id = "testcard" role="img" aria-label="emoji">Exploring Daily Changes in Bay Area Covid-19 Cases
                                    </span>
                                </div>
                                <div className="tag-table">
                                    <div className="tag-item">
                                        <p style = {{fontSize:'0.9em'}}>HTML</p>
                                    </div>
                                    <div className="tag-item">
                                        <p style = {{fontSize:'0.9em'}}>CSS</p>
                                    </div>
                                    <div className="tag-item">
                                        <p style = {{fontSize:'0.9em'}}>React</p>
                                    </div>
                                    <div className="tag-item">
                                        <p style = {{fontSize:'0.9em'}}>Django</p>
                                    </div>
                                    <div className="tag-item">
                                        <p style = {{fontSize:'0.9em'}}>SQL</p>
                                    </div>
                                    <div className="tag-item">
                                        <p style = {{fontSize:'0.9em'}}>D3.js</p>
                                    </div>
                                    <div className="github-tag-item">
                                        <p style = {{fontSize:'0.9em', textDecoration: 'underline'}}>Github</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <div className="portfolio-item-grid">
                                <div>
                                    <img src={waterProject} alt="covid19proj" height="300" width="450"/>
                                </div>
                                <div className="protfolio-item-desc">
                                    <div style={{paddingLeft:'0.5em', marginTop:'5px'}}>
                                        <span id = "testcard" role="img" aria-label="emoji">Analyzing Sediment Constituents in the San Francisco Bay
                                        </span>
                                    </div>
                                    <div className="tag-table">
                                        <div className="tag-item">
                                            <p style = {{fontSize:'0.9em'}}>Python</p>
                                        </div>
                                        <div className="tag-item">
                                            <p style = {{fontSize:'0.9em'}}>CSS</p>
                                        </div>
                                        <div className="github-tag-item">
                                            <p style = {{fontSize:'0.9em', textDecoration: 'underline'}}>Github</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="portfolio-item">
                        <div className="portfolio-item-grid">
                                <div>
                                    <img src={predpreysim} alt="covid19proj" height="300" width="450"/>
                                </div>
                                <div className="protfolio-item-desc">
                                    <div style={{paddingLeft:'0.5em', marginTop:'5px'}}>
                                        <span id = "testcard" role="img" aria-label="emoji">Modeling a Predator and Prey Simulation
                                        </span>
                                    </div>
                                    <div className="tag-table">
                                        <div className="tag-item">
                                            <p style = {{fontSize:'0.9em'}}>Java</p>
                                        </div>
                                        <div className="github-tag-item">
                                            <p style = {{fontSize:'0.9em', textDecoration: 'underline'}}>Github</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="portfolio-item">
                        <div className="portfolio-item-grid">
                                <div>
                                    <img src={devinnunes} alt="covid19proj" height="300" width="450"/>
                                </div>
                                <div className="protfolio-item-desc">
                                    <div style={{paddingLeft:'0.5em', marginTop:'5px'}}>
                                        <span id = "testcard" role="img" aria-label="emoji">Analyzing Sediment Constituents in the San Francisco Bay
                                        </span>
                                    </div>
                                    <div className="tag-table">
                                        <div className="tag-item">
                                            <p style = {{fontSize:'0.9em'}}>Java</p>
                                        </div>
                                        <div className="tag-item">
                                            <p style = {{fontSize:'0.9em'}}>CSS</p>
                                        </div>
                                        <div className="empty-tag-item">
                                            <p style = {{fontSize:'0.7em'}}></p>
                                        </div>
                                        <div className="empty-tag-item">
                                            <p style = {{fontSize:'0.7em'}}></p>
                                        </div>
                                        <div className="empty-tag-item">
                                            <p style = {{fontSize:'0.7em'}}></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Portfoliodisplay
