import React from 'react'
import SEO from "../components/seo"
import Header from '../components/header'
import mainphoto from '../images/mainphoto.jpg'
import secphoto from '../images/teaching.jpg'
import tree from '../images/trees.jpg'
const about = () => {
    return (
        <div style = {{background: "#fafafa", height:'3600px'}}>
            <SEO title = "About"/>
            <Header navLabel = "home" toAddress = "/"/>
            <div id = "first-paragraph">
                <p style={{display:'block'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus viverra 
                    venenatis nunc velit consequat, vulputate ullamcorper odio sit. 
                    Posuere lobortis cursus urna mi pharetra. Convallis auctor interdum sapien et amet. 
                </p>
                <p style={{display:'block'}}>
                    Nunc mattis tincidunt sed dolor interdum felis habitant. 
                    Elit eleifend aliquam a enim nec sed arcu. Nibh mi ornare cras 
                    elementum velit a, ultricies magna non. Sit justo, venenatis et quis a, 
                    vestibulum, ultricies viverra. Quisque egestas fringilla venenatis pellentesque.
                </p>
            </div>
            <div id = "first-img-container">
                <img id="main-image" src={mainphoto}></img>
            </div>
            <div id = "resume-button">
                <div id="resume-text">
                    <p>RESUME</p>
                </div>
            </div>
            <div id="sec-paragraph">
                <p style={{display:'block'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus viverra 
                    venenatis nunc velit consequat, vulputate ullamcorper odio sit. 
                    Posuere lobortis cursus urna mi pharetra. Convallis auctor interdum sapien et amet. 
                </p>
                <p style={{display:'block'}}>
                    Nunc mattis tincidunt sed dolor interdum felis habitant. 
                    Elit eleifend aliquam a enim nec sed arcu. Nibh mi ornare cras 
                    elementum velit a, ultricies magna non.
                </p>
            </div>
            <div id = "sec-img-container">
                <img id="sec-image" src={secphoto}></img>
            </div>
            <div id="about-quote">
                <p id = "about-quote-text">
                    <mark style ={{backgroundColor:'#4cf2c9'}}>"Leave the roads; take the trails." - Pythagoras</mark>
                    </p>
            </div>
            <div id = "about-border" >
                <hr/>
            </div>
            <div id="creating">
                <div style = {{fontFamily:'Inter', fontWeight:'bold', fontSize:'36px'}}>
                    <p>Creating</p>
                </div>
                <div style = {{background:'#F0F0F0'}}>
                    <p>test</p>
                </div>
            </div>
            <div id="leading">
                <div style = {{fontFamily:'Inter', fontWeight:'bold', fontSize:'36px'}}>
                    <p>Leading</p>
                </div>
                <div style = {{background:'#F0F0F0'}}>
                    <p>test</p>
                </div>
            </div>
            <div id = "about-border-two" >
                <hr/>
            </div>
            <div id = "my-mind">
                <p style = {{fontFamily:'Inter', 
                            fontSize:'36px', 
                            fontWeight:'bold', 
                            lineHeight:'134%',
                            display:'block'}}>
                    Where my mind is at the moment
                </p>
                <p style = {{fontFamily:'Inter', 
                            fontSize:'18px', 
                            fontWeight:'bold', 
                            lineHeight:'134%',
                            display:'block'}}>
                    * Currently reading a research paper on Spanish revival architecture
                </p>
                <p style = {{fontFamily:'Inter', 
                            fontSize:'18px', 
                            fontWeight:'bold', 
                            lineHeight:'134%',
                            display:'block'}}>
                    * Also reading about the catostrophic danger that the Juan De Fuca plate in Washington state 
                    can cause
                </p>
            </div>
            <div id = "last-img">
                <img id="forest-image" src={tree}></img>
            </div>
        </div>
    )
}

export default about 
