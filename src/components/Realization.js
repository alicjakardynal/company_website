import React, { Component } from "react";
import img1 from "../assets/DSC00244.JPG";
import img2 from "../assets/DSC00211.JPG";
import img3 from "../assets/DSC00168.JPG";
import img4 from "../assets/DSC00196.JPG";
import img5 from "../assets/DSC00148.JPG";
import img6 from "../assets/DSC00120.JPG";
import img7 from "../assets/DSC00137.JPG";
import img8 from "../assets/DSC00107.JPG";
import img9 from "../assets/DSC00131.JPG";
import img10 from "../assets/DSC00073.JPG";
import img11 from "../assets/DSC00084.JPG";
import img12 from "../assets/DSC00052.JPG";


class Realization extends Component {
  state={
url:"../assets/DSC00120.JPG"
  }
  makePictureBigger(){
    
  }
  render() {
    return (
      <>
        <div className="realization_container">
          <div className="realization_row first_row">
            <img className="col" src={img1} ></img>
            <img  className="col" src={img2} ></img>
            <img className="col" src={img3}></img>
          </div>
          <div className="realization_row second_row">
          <img className="col" src={img4} ></img>
            <img  className="col" src={img5} ></img>
            <img className="col" src={img6}></img>
          </div>
          <div className="realization_row third_row">
          <img className="col" src={img7} ></img>
            <img  className="col" src={img8} ></img>
            <img className="col" src={img9}></img>
          </div>
          <div className="realization_row fourth_row">
          <img className="col" src={img10} ></img>
            <img  className="col" src={img11} ></img>
            <img className="col" src={img12}></img>
          </div>
        </div>
        {/* <div className="popUp">
          <div className="popUpImage">

          </div>
          
        </div> */}
      </>
    );
  }
}

export default Realization;
