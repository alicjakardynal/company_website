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

const imagesData = [
  { src: img1, title: "ul.Naftowa 25 Sosnowiec" },
  {src: img2, title: "ul.Naftowa 25 Sosnowiec" },
  { src: img3, title: "ul.Kamienna Ruda Śląska" },
  { src: img4, title: "ul.Kamienna Ruda Śląska" },
  { src: img5, title: "ul.Kamienna Ruda Śląska" },
  { src: img6, title: "ul.Kamienna 38-40 Ruda Śląska" },
  { src: img7, title: "ul.Kamienna 38-40 Ruda Śląska" },
  { src: img8, title: "ul.Kamienna 38-40 Ruda Śląska" },
  { src: img9, title: "ul.Kamienna 38-40 Ruda Śląska" },
  { src: img10, title: "ul.Mysłowicka 29 Katowice" },
  { src: img11, title: "ul.Mysłowicka 29 Katowice" },
  { src: img12, title: "ul.Mysłowicka 10 Katowice" },
]

 
class Realization extends Component {
  state={
    currentSrc:"",
    isItClicked:false,
    currentTitle:"",
    currentIndex:0,


  }


  startGallery=(src,title,index)=>{
    this.setState({
      isItClicked:true,
      currentSrc:src,
      currentTitle:title,
      currentIndex:index
      
    })
    
  }
  backFromGallery=()=>{
    this.setState({
      isItClicked:false,
      
    });
    
  }
  nextPicture=()=>{
    if(this.state.currentIndex===imagesData.length-1){
      this.setState({
        currentIndex:0,
        currentSrc:imagesData[0].src,
        currentTitle:imagesData[0].title

      })
    }else{
       this.setState({
      currentIndex:this.state.currentIndex+1,
      currentSrc:imagesData[this.state.currentIndex+1].src,
      currentTitle:imagesData[this.state.currentIndex+1].title
    })
    }
   

  }
  prevPicture=()=>{
    if(this.state.currentIndex===0){
      this.setState({
        currentIndex:imagesData.length-1,
        currentSrc:imagesData[imagesData.length-1].src,
        currentTitle:imagesData[imagesData.length-1].title

      })
    }else{
    this.setState({
      currentIndex:this.state.currentIndex-1,
      currentSrc:imagesData[this.state.currentIndex-1].src,
      currentTitle:imagesData[this.state.currentIndex-1].title
    })}
    
  }
  render() {
    return (
      <>
        <div className="realization_container">
          <div className="realization_row first_row">
            <img onClick={()=>this.startGallery(imagesData[0].src,imagesData[0].title,0)} className="col" src={img1} ></img>
            <img  onClick={()=>this.startGallery(imagesData[1].src,imagesData[1].title,1)}className="col" src={img2} ></img>
            <img onClick={()=>this.startGallery(imagesData[2].src,imagesData[2].title,2)}className="col" src={img3}></img>
          </div>
          <div className="realization_row second_row">
          <img onClick={()=>this.startGallery(imagesData[3].src,imagesData[3].title,3)}className="col" src={img4} ></img>
            <img onClick={()=>this.startGallery(imagesData[4].src,imagesData[4].title,4)} className="col" src={img5} ></img>
            <img onClick={()=>this.startGallery(imagesData[5].src,imagesData[5].title,5)} className="col" src={img6}></img>
          </div>
          <div className="realization_row third_row">
          <img onClick={()=>this.startGallery(imagesData[6].src,imagesData[6].title,6)} className="col" src={img7} ></img>
            <img  onClick={()=>this.startGallery(imagesData[7].src,imagesData[7].title,7)} className="col" src={img8} ></img>
            <img onClick={()=>this.startGallery(imagesData[8].src,imagesData[8].title,8)} className="col" src={img9}></img>
          </div>
          <div className="realization_row fourth_row">
          <img  onClick={()=>this.startGallery(imagesData[9].src,imagesData[9].title,9)}className="col" src={img10} ></img>
            <img onClick={()=>this.startGallery(imagesData[10].src,imagesData[10].title,10)} className="col" src={img11} ></img>
            <img onClick={()=>this.startGallery(imagesData[11].src,imagesData[11].title,11)} className="col" src={img12}></img>
          </div>
        </div>
          <div className={this.state.isItClicked ? "popUp" : "dontPopUp"}>
          <div className="popUpImageArea" >
            <img className="popUpImage" src={this.state.currentSrc}>
              
            </img>
            <i className="fas fa-angle-left" onClick={this.prevPicture}> </i> 
            <button onClick={this.backFromGallery} className="close_btn fas fa-times"></button>
            <i  className="fas fa-angle-right" onClick={this.nextPicture}> </i>
            <div className="img_title"><h2>{this.state.currentTitle}</h2></div>
            
          </div>
          
        </div>
      </>
    );
  }
}

export default Realization;


// style={{backgroundImage: `url(${this.state.currentSrc})`}}