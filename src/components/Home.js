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
                    wieloma rzetelnymi pracami z terminowym wykonaniem.</p>
                    <p className="what_we_do_title">Wykonujemy:</p>
                    <p className="what_we_do">Docieplenia budynków metodą lekką-mokrą i suchą</p>
                    <p className="what_we_do">Wymiana stolarki okiennej i drzwiowej</p>
                    <p className="what_we_do">Pokrycia i docieplenia stropodachów</p>
                    <p className="what_we_do">Opaski wokół budynków</p>
                    <p className="what_we_do">Zadaszenia nad balkonami, wejściami wraz z ich remontem</p>
                    <p className="what_we_do">Balustrady na balkonach</p>
                    <p className="what_we_do">Instalacje odgromowe</p>
                    <p className="what_we_do">Prace gruntowe wokół budynków?</p>
                   
                    <p>
                    Pracujemy na materiałach najwyższej jakości oraz współpracujemy z takimi producentami jak: Ceresit, Arsanit, Atlas, Kreisel, Baumit, Weber. </p>

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