import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";
import {
    Link,
    DirectLink,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller
  } from "react-scroll";


class Home extends Component{
    render(){
        return(
            <>
            <Banner/>
            <AboutCompany/>
            </>
        )
    }
}

class Banner extends Component{
    render(){
        return(
            <>
            <div className="banner_background"></div>
            <Link className="banner_btn about" 
            to="about_company"
            spy={true}
            smooth={true}
            duration={700}> O firmie</Link>
            <NavLink className="banner_btn job" exact to ='/job'> Chcesz nawiązać współpracę?</NavLink>
            </>
        )
    }
}
class AboutCompany extends Component{
    render(){
        return(
            <>
            
            <div className="about_company" id="about_company">
                <Fade left>
                    <div className="about_text">
                    <h2> O nas</h2>
                <p>Jesteśmy firmą z kilkunastoletnim doświadczeniem, specjalizującą się w termoizolacji 
                    budynków mieszkalnych oraz pracami związanymi z remontami budynków. Możemy pochwalić się
                    wieloma rzetelnymi pracami z terminowym wykonaniem. </p>
                </div>
                </Fade>
                <Fade right> 
                <div className="about_img"></div>
                </Fade>
            </div>
            </>
        )
    }
}
export default Home;