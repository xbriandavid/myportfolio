import React from 'react'
import covid from '../images/covprj.png'
import waterProject from '../images/waterprj.png'
import predpreysim from '../images/predprayprj.png'
import devinnunes from '../images/devinnunes.png'
const Portfoliodisplay = () => {
    return (
        <div style = {{background:'#fafafa'}}>
            <hr className="rounded"/>
            <div id="portfolio-display">
                <div id = "portfolio-grid">
                    <div className="portfolio-item">
                        <div className="portfolio-item-grid">
                            <div>
                                <a href="http://covid-bayarea.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <img id = "image1" src={covid} alt="covid19proj" height="300" width="450"/>
                                </a>
                            
                            </div>
                            <div className="protfolio-item-desc">
                                <div style={{paddingLeft:'1.5em', marginTop:'12px'}}>
                                    <span id = "testcard" role="img" aria-label="emoji">Exploring Daily Changes in Bay Area Covid-19 Cases
                                    </span>
                                </div>
                                <div className="tag-table">
                                    <div className="tag-item">
                                        <p className="tag-font">HTML</p>
                                    </div>
                                    <div className="tag-item">
                                        <p className="tag-font">CSS</p>
                                    </div>
                                    <div className="tag-item">
                                        <p className="tag-font">React</p>
                                    </div>
                                    <div className="tag-item">
                                        <p className="tag-font">Django</p>
                                    </div>
                                    <div className="tag-item">
                                        <p className="tag-font">SQL</p>
                                    </div>
                                    <div className="tag-item">
                                        <p className="tag-font">D3.js</p>
                                    </div>
                                    <div className="github-tag-item">
                                        <a className="github-tag-font" 
                                            style={{color:'inherit'}} 
                                            href="https://github.com/xbriandavid/covcases" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >Github</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <div className="portfolio-item-grid">
                                <div>
                                    <img src={waterProject} alt="Analyzing water constitutents" height="300" width="450"/>
                                </div>
                                <div className="protfolio-item-desc">
                                    <div style={{paddingLeft:'1em', marginTop:'12px'}}>
                                        <span id = "testcard" role="img" aria-label="emoji">Analyzing Sediment Constituents in the San Francisco Bay
                                        </span>
                                    </div>
                                    <div className="tag-table">
                                        <div className="tag-item">
                                            <p className="tag-font">Python</p>
                                        </div>
                                        <div className="tag-item">
                                            <p className="tag-font">CSS</p>
                                        </div>
                                        <div className="github-tag-item">
                                            <a className="github-tag-font" 
                                                style={{color:'inherit'}} 
                                                href="https://github.com/xbriandavid/covcases" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                            >Github</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="portfolio-item">
                        <div className="portfolio-item-grid">
                                <div>
                                    <img src={predpreysim} alt="Predator and Prey simulation inside a GUI" height="300" width="450"/>
                                </div>
                                <div className="protfolio-item-desc">
                                    <div style={{paddingLeft:'1.5em', marginTop:'12px'}}>
                                        <span id = "testcard" role="img" aria-label="emoji">Modeling a Predator and Prey Simulation
                                        </span>
                                    </div>
                                    <div className="tag-table">
                                        <div className="tag-item">
                                            <p className="tag-font">Java</p>
                                        </div>
                                        <div className="github-tag-item">
                                            <a className="github-tag-font"
                                                style={{color:'inherit'}} 
                                                href="https://github.com/xbriandavid/PredPreySim" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                            >
                                                Github</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="portfolio-item">
                        <div className="portfolio-item-grid">
                                <div>
                                    <img src={devinnunes} alt="Showing economic issues in CA-22" height="300" width="450"/>
                                </div>
                                <div className="protfolio-item-desc">
                                    <div style={{paddingLeft:'1.5em', marginTop:'12px'}}>
                                        <span id = "testcard" role="img" aria-label="emoji">CA-22 2018 Election
                                        </span>
                                    </div>
                                    <div className="tag-table">
                                        <div className="tag-item">
                                            <p className="tag-font">Java</p>
                                        </div>
                                        <div className="tag-item">
                                            <p className="tag-font">CSS</p>
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
