import React, { Component } from "react";
import {
  Container
} from "reactstrap";
import { faChess } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBellSlash } from "@fortawesome/free-solid-svg-icons";

class Section3 extends Component {
  render(){
    return(
      <Container
        style={{ padding: "0", margin: "0" }}
      >
        <div className="section" id="section3">
          <div className="anchor" id="section-3"></div>
          <section className="section-img">
            <div className="section-imgtext">
              <a href="#section-3">
                <h2>
                  <FontAwesomeIcon icon={faChess} />
                  &nbsp;Game Dev&nbsp;
                  <FontAwesomeIcon icon={faChess} />
                </h2>
              </a>
            </div>
          </section>
          <section className="section-text">
            <p>I was introduced to code when I was 17 and </p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque molestiae esse rem incidunt ipsa rerum nemo quod cupiditate aspernatur vel?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque molestiae esse rem incidunt ipsa rerum nemo quod cupiditate aspernatur vel?</p>
          </section>
          <section className="section-img">
            <div className="section-imgtext">
              <a href="#section-4">
                <h2>
                  <FontAwesomeIcon icon={faBellSlash} />
                  &nbsp;Smth Else&nbsp;
                  <FontAwesomeIcon icon={faBellSlash} />
                </h2>
              </a>
            </div>
          </section>
        </div>
      </Container>
    );
  }
}

export default Section3;