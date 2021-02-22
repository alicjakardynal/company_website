import React, { Component } from "react";
import Menu from './Menu';

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
import img13 from "../assets/DSC01631.JPG";
import img14 from "../assets/DSC01646.JPG";
import img15 from "../assets/DSC01695.JPG";
import img16 from "../assets/DSC01676.JPG";
import img17 from "../assets/DSC01674.JPG";
import img18 from "../assets/DSC01677.JPG";
import img19 from "../assets/DSC01683.JPG";
import img20 from "../assets/DSC01686.JPG";
import img21 from "../assets/DSC01688.JPG";
import img22 from "../assets/DSC01691.JPG";
import img23 from "../assets/DSC01668.JPG";
import img24 from "../assets/DSC01672.JPG";
import img25 from "../assets/DSC01663.JPG";
import img26 from "../assets/DSC01664.JPG";
import img27 from "../assets/DSC01710.JPG";
import img28 from "../assets/DSC01703.JPG";
import img29 from "../assets/DSC01706.JPG";
import img30 from "../assets/DSC01714.JPG";
import img31 from "../assets/DSC01716.JPG";
import img32 from "../assets/DSC01711.JPG";
import img33 from "../assets/DSC01654.JPG";
import img34 from "../assets/DSC01657.JPG";
import img35 from "../assets/DSC01647.JPG";
import img36 from "../assets/DSC01659.JPG";


const imagesData = [
  { src: img1, title: "ul.Naftowa 25 Sosnowiec" },
  {src: img2, title: "ul.Naftowa 25 Sosnowiec" },
  { src: img3, title: "ul.Naftowa 2 Sosnowiec" },
  { src: img4, title: "ul.Naftowa 2 Sosnowiec" },
  { src: img5, title: "ul.Kamienna Ruda Śląska" },
  { src: img6, title: "ul.Kamienna 38-40 Ruda Śląska" },
  { src: img7, title: "ul.Kamienna 38-40 Ruda Śląska" },
  { src: img8, title: "ul.Kamienna 38-40 Ruda Śląska" },
  { src: img9, title: "ul.Kamienna 38-40 Ruda Śląska" },
  { src: img10, title: "ul.Mysłowicka 29 Katowice" },
  { src: img11, title: "ul.Mysłowicka 29 Katowice" },
  { src: img12, title: "ul.Mysłowicka 10 Katowice" }, 
  { src: img13, title: "ul.Begoni 6/8 Tychy" },
  { src: img14, title: "ul.Begoni 6/8 Tychy" },
  { src: img15, title: "ul.Turkusowa 21 Tychy" },
  { src: img16, title: "ul.Dąbrowskiego 95 Tychy" },
  { src: img17, title: "ul.Dąbrowskiego 95 Tychy" },
  { src: img18, title: "ul.Dąbrowskiego 95 Tychy" },
  { src: img19, title: "ul.Poziomkowa 14 Tychy" },
  { src: img20, title: "ul.Poziomkowa 14 Tychy" },
  { src: img21, title: "ul.Poziomkowa 44 Tychy" },
  { src: img22, title: "ul.Poziomkowa 44 Tychy" },
  { src: img23, title: "ul. De gaulle'a 28 Tychy" },
  { src: img24, title: "ul. De gaulle'a 28 Tychy" },
  { src: img25, title: "ul.Kochanowskiego 8 Mikołów" },
  { src: img26, title: "ul.Kochanowskiego 8 Mikołów" },
  { src: img27, title: "ul.Reymonta Tychy" },
  { src: img28, title: "ul.Wieniawskiego Tychy" },
  { src: img29, title: "ul.Wieniawskiego Tychy" },
  { src: img30, title: "ul.Harcerska 5-7 Tychy" },
  { src: img31, title: "ul.Harcerska 5-7 Tychy" },
  { src: img32, title: "ul.Honoraty Tychy" },
  { src: img33, title: "ul.30-lecia 8 Mikołów" },
  { src: img34, title: "ul.30-lecia 8 Mikołów" },
  { src: img35, title: "ul.30-lecia 5-7 Mikołów" },
  { src: img36, title: "ul.30-lecia 5-7 Mikołów" },
 
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
      
      <Menu/>
        <div className="realization_container">
          
            <img onClick={()=>this.startGallery(imagesData[0].src,imagesData[0].title,0)} className="col" src={img1} ></img>
            <img  onClick={()=>this.startGallery(imagesData[1].src,imagesData[1].title,1)}className="col" src={img2} ></img>
            <img onClick={()=>this.startGallery(imagesData[2].src,imagesData[2].title,2)}className="col" src={img3}></img>
       
          
          <img onClick={()=>this.startGallery(imagesData[3].src,imagesData[3].title,3)}className="col" src={img4} ></img>
            <img onClick={()=>this.startGallery(imagesData[4].src,imagesData[4].title,4)} className="col" src={img5} ></img>
            <img onClick={()=>this.startGallery(imagesData[5].src,imagesData[5].title,5)} className="col" src={img6}></img>
       
          
          <img onClick={()=>this.startGallery(imagesData[6].src,imagesData[6].title,6)} className="col" src={img7} ></img>
            <img  onClick={()=>this.startGallery(imagesData[7].src,imagesData[7].title,7)} className="col" src={img8} ></img>
            <img onClick={()=>this.startGallery(imagesData[8].src,imagesData[8].title,8)} className="col" src={img9}></img>
       
          
          <img  onClick={()=>this.startGallery(imagesData[9].src,imagesData[9].title,9)}className="col" src={img10} ></img>
            <img onClick={()=>this.startGallery(imagesData[10].src,imagesData[10].title,10)} className="col" src={img11} ></img>
            <img onClick={()=>this.startGallery(imagesData[11].src,imagesData[11].title,11)} className="col vertical" src={img12}></img>
       
          
          <img  onClick={()=>this.startGallery(imagesData[12].src,imagesData[12].title,12)}className="col" src={img13} ></img>
            <img onClick={()=>this.startGallery(imagesData[13].src,imagesData[13].title,13)}  className="col vertical" src={img14} ></img>
            <img onClick={()=>this.startGallery(imagesData[14].src,imagesData[14].title,14)} className="col" src={img15}></img>
       
          
          <img  onClick={()=>this.startGallery(imagesData[15].src,imagesData[15].title,15)}className="col" src={img16} ></img>
            <img onClick={()=>this.startGallery(imagesData[16].src,imagesData[16].title,16)} className="col" src={img17} ></img>
            <img onClick={()=>this.startGallery(imagesData[17].src,imagesData[17].title,17)} className="col" src={img18}></img>
       
          
          <img  onClick={()=>this.startGallery(imagesData[18].src,imagesData[18].title,18)}className="col" src={img19} ></img>
            <img onClick={()=>this.startGallery(imagesData[19].src,imagesData[19].title,19)} className="col" src={img20} ></img>
            <img onClick={()=>this.startGallery(imagesData[20].src,imagesData[20].title,20)} className="col" src={img21}></img>
         
          
          <img  onClick={()=>this.startGallery(imagesData[21].src,imagesData[21].title,21)}className="col" src={img22} ></img>
            <img onClick={()=>this.startGallery(imagesData[22].src,imagesData[22].title,22)} className="col" src={img23} ></img>
            <img onClick={()=>this.startGallery(imagesData[23].src,imagesData[23].title,23)} className="col" src={img24}></img>
         
          
          <img  onClick={()=>this.startGallery(imagesData[24].src,imagesData[24].title,24)}className="col" src={img25} ></img>
            <img onClick={()=>this.startGallery(imagesData[25].src,imagesData[25].title,25)} className="col" src={img26} ></img>
            <img onClick={()=>this.startGallery(imagesData[26].src,imagesData[26].title,26)} className="col" src={img27}></img>
         
          
          <img  onClick={()=>this.startGallery(imagesData[27].src,imagesData[27].title,27)}className="col" src={img28} ></img>
            <img onClick={()=>this.startGallery(imagesData[28].src,imagesData[28].title,28)} className="col" src={img29} ></img>
            <img onClick={()=>this.startGallery(imagesData[29].src,imagesData[29].title,29)} className="col" src={img30}></img>
         
          
          <img  onClick={()=>this.startGallery(imagesData[30].src,imagesData[30].title,30)}className="col" src={img31} ></img>
            <img onClick={()=>this.startGallery(imagesData[31].src,imagesData[31].title,31)} className="col" src={img32} ></img>
            <img onClick={()=>this.startGallery(imagesData[32].src,imagesData[32].title,32)} className="col" src={img33}></img>
         
          
          <img  onClick={()=>this.startGallery(imagesData[33].src,imagesData[33].title,33)}className="col" src={img34} ></img>
            <img onClick={()=>this.startGallery(imagesData[34].src,imagesData[34].title,34)} className="col" src={img35} ></img>
            <img onClick={()=>this.startGallery(imagesData[35].src,imagesData[35].title,35)} className="col" src={img36}></img>
         
              </div>
          <div className={this.state.isItClicked ? "popUp" : "dontPopUp"}>
          <div className="popUpImageArea" >
            <img className={(this.state.currentIndex === 11 || this.state.currentIndex ===13) ? "popUpImage wider" : "popUpImage"} src={this.state.currentSrc}>
              
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