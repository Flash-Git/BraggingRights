import React, { Component } from "react";
import {
  Container
} from "reactstrap";
import { faCube/*, faCubes*/ } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Section1 extends Component {
  render(){
    return(
      <Container
        style={{ padding: "0", margin: "0" }}
      >
        <div className="section" id="section1">
          <div className="anchor" id="section-1"></div>
          <section className="section-img">
            <div className="section-imgtext">
              <a href="#section-1">
                <h2>
                  <FontAwesomeIcon icon={
                    faCube
                    //faCubes
                  } />
                  &nbsp;Blockchain&nbsp;
                  <FontAwesomeIcon icon={
                    faCube
                    //faCubes
                  } />
                </h2>
              </a>
            </div>
          </section>
          <section className="section-text">
            <div className="first">
              <p>Blockchain</p>            
            </div>
            <div className="second">
              <p>Blockchain</p>
            </div>
          </section>
        </div>
      </Container>
    );
  }
}

export default Section1;