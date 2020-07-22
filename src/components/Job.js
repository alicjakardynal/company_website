import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class Job extends Component{
    render(){
        return(
            <>
            <Fade right>
                <div className="job_area">
                    <div>
                    <p>Szukamy pracowników budowlanych do pracy w województwie śląskim. </p>
                    <p>Jeżeli jesteś zainteresowany skontaktuj się z nami pod numer: +48 502253424. </p>
                    </div>
                </div>
            </Fade>
            </>
        )
    }
}


export default Job;