import React, { Component } from "react";
import {
  Container
} from "reactstrap";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Section2 extends Component {
  render(){
    return(
      <Container
        style={{ padding: "0", margin: "0" }}
      >
        <div className="section" id="section2">
          <div className="anchor" id="section-2"></div>
          <section className="section-img">
            <div className="section-imgtext">
              <a href="#section-2">
                <h2>
                  <FontAwesomeIcon icon={faDesktop} />
                  &nbsp;Web&nbsp;
                  <FontAwesomeIcon icon={faDesktop} />
                </h2>
              </a>
            </div>
          </section>
          <section className="section-text">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque molestiae esse rem incidunt ipsa rerum nemo quod cupiditate aspernatur vel?</p>
          </section>
        </div>
      </Container>
    );
  }
}

export default Section2;