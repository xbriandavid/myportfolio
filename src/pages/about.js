import React from 'react'
import SEO from "../components/seo"
import Header from '../components/header'
import mainphoto from '../images/mainphoto.jpg'
import secphoto from '../images/teaching.jpg'
import tree from '../images/trees-2.jpg'
const about = () => {
    return (
        <div id = "about-me-page">
            <SEO id = "about-nav" title = "About"/>
            <Header navLabel = "home" toAddress = "/"/>
            <div id = "first-paragraph">
                <p id="first-par-name">Hi there I'm Brian</p>
                <p style={{display:'block'}}>
                I was born and raised in the San Francisco Bay Area in California and 
                eccentrically decided to study across the country and attend GWU in 
                Washington D.C. I’m currently a senior majoring in statistics and minoring in 
                computer science. 
                </p>
                <p style={{display:'block'}}>
                In my spare time, I love to hike and visit the hills and mountain ranges that surround 
                the Bay Area.  Reaching the summit of a hill or a mountain is my biggest stress reliever. 
                To see the tiny houses and buildings or even the Pacific Ocean from the view below is 
                such a rewarding feeling, yet it makes me wonder if I could go even higher, and 
                have an even better, expansive view of what’s below.
                </p>

            </div>
            <div id = "first-img-container">
                <img id="main-image" src={mainphoto} alt="peace sign under a number 2"></img>
            </div>
            <a id = "resume-button" href = '../downloads/BrianDavidResume.pdf' style={{color:'inherit', textDecoration:'none'}} download>
                <div id="resume-text">
                    <p>RESUME</p>
                </div>
            </a>
            <div id="sec-paragraph">
                <p style={{display:'block'}}>
                I also love talking about the diversity of Southeast Asian cultures and their 
                representation in the political space and in the LGBTQ+ community.
                </p>
            </div>
            <div id = "sec-img-container">
                <img id="sec-image" src={secphoto} alt="Me teaching a pyhton class"></img>
            </div>
            <div id="about-quote">
                <p id = "about-quote-text">
                    <mark style ={{backgroundColor:'#4cf2c9'}}>"Leave the roads; take the trails." - Pythagoras</mark>
                    </p>
            </div>
            <div id = "about-border" >
                <hr/>
            </div>
            <div id="positionSummary">
                <div id="creating">
                    <div style = {{fontFamily:'Inter', fontWeight:'bold', fontSize:'36px'}}>
                        <p>Creating</p>
                    </div>
                    <div style = {{fontFamily:'Inter'}}>
                        <span style={{display:'block', paddingTop:'25px'}}>Admin. Assistant at GWU Business <span style = {{fontWeight:'bold'}}>2020</span></span>
                        <span style={{display:'block',paddingTop:'10px'}}> Intern at Maureen Erwin Consulting <span style = {{fontWeight:'bold'}}>2018</span></span>
                    </div>
                </div>
                <div id="leading">
                    <div style = {{fontFamily:'Inter', fontWeight:'bold', fontSize:'36px'}}>
                        <p>Leading</p>
                    </div>
                    <div style = {{fontFamily:'Inter'}}>
                    <span style={{display:'block', paddingTop:'25px'}}>Co-President of GW Data <span style = {{fontWeight:'bold'}}>2020</span></span>
                    <span style={{display:'block', paddingTop:'10px'}}>Communications Chairman of Delta Lambda Phi <span style = {{fontWeight:'bold'}}>2020</span></span>
                    <span style={{display:'block', paddingTop:'10px'}}>Chief Technology Officer of GW Data <span style = {{fontWeight:'bold'}}>2019-2020</span></span>
                    <span style={{display:'block', paddingTop:'10px'}}>V.P. Communications & Outreach <span style = {{fontWeight:'bold'}}>2018-2019</span></span>
                    <span style={{display:'block', paddingTop:'10px'}}>Director of Attendance of Alpha Kappa Psi <span style = {{fontWeight:'bold'}}>2018</span></span>
                    <span style={{display:'block', paddingTop:'10px'}}>Director of Records of Alpha Kappa Psi <span style = {{fontWeight:'bold'}}>2018</span></span>
                    </div>
                </div>
            </div>
            <div id = "about-border-two" >
                <hr/>
            </div>
            <div id = "ending-component">
                <div id = "last-img">
                    <img id="forest-image" src={tree} alt="Calming Redwood Trees"></img>
                </div>
                <div id = "my-mind">
                    <p style = {{fontFamily:'Inter', 
                                fontSize:'32px', 
                                fontWeight:'bold', 
                                lineHeight:'134%',
                                display:'block'}}>
                        Where my mind is at the moment
                    </p>
                    <p style = {{fontFamily:'Inter', 
                                fontSize:'18px', 
                                lineHeight:'134%',
                                display:'block'}}>
                        * Currently reading a research paper on Spanish revival architecture
                    </p>
                    <p style = {{fontFamily:'Inter', 
                                fontSize:'18px', 
                                lineHeight:'134%',
                                display:'block'}}>
                        * Also reading about the catostrophic danger that the Juan De Fuca plate in Washington state 
                        can cause
                    </p>
                </div>
                <div id="ending-para">
                    <p style = {{fontWeight:'bold'}}>Thanks for stopping by <span role="img" aria-label="heart">💙</span></p>
                    <p>Of Course, our journey doesn't have to end just yet!</p>
                    <p>Let's chat! <p style={{color:'#41AAc4', fontWeight:'bold'}}>bdavid1@gwu.edu</p></p>
                </div>
            </div>
        </div>
    )
}

export default about 
