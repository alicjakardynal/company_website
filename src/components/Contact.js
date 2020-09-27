import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class Contact extends Component {
  render() {
    return (
      <>
        <Fade left>
          <div className="contact">
            <div>
              <h2>Nazwa:</h2>
              <p> (Jako ściśle współpracujace firmy można nas znaleźć pod dwoma nazwami)</p>
              <p>"UL-BUD" oraz "Usługi Budowlane Roman Kardynał"</p>
            </div>
            <div>
              <div>
              <h2><i class="fas fa-envelope-open-text"></i> Email:</h2>
              <p> rkardynal@poczta.onet.pl</p>
              <p> ulbud@poczta.onet.pl</p>
              </div>
              <div>
              <h2> <i class="fas fa-phone-alt"></i>Numer Kontaktowy:</h2>
              <p> +48 502 253 424</p>
              <p> +48 504 253 973</p>
              </div>
            </div>
          </div>
        </Fade>
      </>
    );
  }
}

export default Contact;
