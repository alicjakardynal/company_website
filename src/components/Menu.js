import React, { Component } from "react";
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

class Menu extends Component {
  render() {
    return (
      <>
        <div className="menu">
          <div className="company_signature">
            <div></div>
            <h2>KAR-BUD</h2>
          </div>
          <div className="menu_section">
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
