import React, { Component } from "react";
import {
  Container
} from "reactstrap";
import { faAnchor } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Section2 extends Component {
  render(){
    return(
      <Container
        style={{ padding: "0", margin: "0" }}
      >
        <div className="section" id="section2">
          <section className="section-text">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque molestiae esse rem incidunt ipsa rerum nemo quod cupiditate aspernatur vel?</p>
          </section>
          <section className="section-img">
            <div className="section-imgtext">
              <h2>
                <FontAwesomeIcon icon={faAnchor} />
                &nbsp;Cunt&nbsp;
                <FontAwesomeIcon icon={faAnchor} />
              </h2>
            </div>
          </section>
        </div>
      </Container>
    );
  }
}

export default Section2;