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
            <div className="first">
              <p>
                I was introduced to code when I was 17, programming teachers were of short supply in rural France
                so I became one myself. After learning about if statements and for loops, I spent a damaging amount of time
                finding out how far they could take me.
              </p>
              <p>I moved from Processing to real java and tried to conjur up the building blocks of things I could recognise.
                I refused to touch dependencies and instead focused on algorithms and game design principles.
              </p>
            </div>
            <div className="second">
              <p>IMAGE</p>
            </div>
          </section>
          <section className="section-img">
            <div className="section-imgtext">
              <a href="#section-4">
                <h2>
                  <FontAwesomeIcon icon={faBellSlash} />
                  &nbsp;Developer Progression&nbsp;
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