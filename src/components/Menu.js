import React, { Component } from "react";
import { NavLink } from "react-router-dom";


class Menu extends Component {
  state={
    menuBtnClicked:false
  }

  menuClick=()=>{
    if(this.state.menuBtnClicked== false){
      this.setState({
      menuBtnClicked:true
    })
    }else{this.setState({
      menuBtnClicked:false
    })
      
    }
    
  }
  render() {
    return (
      <>
        <div className="menu">
          <div className="company_signature">
            <div className="signature"></div>
            <div >
              <h2>Usługi Budowlane </h2>
            <h2 className="bigger_sign">KARDYNAŁ</h2>
            </div>
            
          </div>
          <div className={this.state.menuBtnClicked ? "menu_btn cross" : "menu_btn"} onClick={this.menuClick}>
            <div className= "btn_line"></div>
            <div className="btn_line"></div>
            <div className="btn_line"></div>
          </div>
          <div className={this.state.menuBtnClicked ? "menu_section show" : "menu_section"}>
            <NavLink className="navigation_part" exact to ='/'>Strona Główna</NavLink>
            <NavLink className="navigation_part" exact to ='/realization'>Realizacje</NavLink>
            <NavLink className="navigation_part" exact to ='/references'>Referencje i Certyfikaty</NavLink>
            <NavLink className="navigation_part" exact to ='/job'> Praca</NavLink>
            <NavLink className="navigation_part" exact to ='/contact'> Kontakt</NavLink>
          </div>
        </div>
      </>
    );
  }
}

export default Menu;
