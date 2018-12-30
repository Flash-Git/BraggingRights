import React, { Component } from "react";
import {
  Container
} from "reactstrap";
import { faChess } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Section3 extends Component {
  render(){
    return(
      <Container
        style={{ padding: "0", margin: "0" }}
      >
      <div className="section" id="section3">
        <section className="section-text">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque molestiae esse rem incidunt ipsa rerum nemo quod cupiditate aspernatur vel?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque molestiae esse rem incidunt ipsa rerum nemo quod cupiditate aspernatur vel?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque molestiae esse rem incidunt ipsa rerum nemo quod cupiditate aspernatur vel?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque molestiae esse rem incidunt ipsa rerum nemo quod cupiditate aspernatur vel?</p>
        </section>
        <section className="section-img">
          <div className="section-imgtext">
            <h2>
              <FontAwesomeIcon icon={faChess} />
              &nbsp;Cunt&nbsp;
              <FontAwesomeIcon icon={faChess} />
            </h2>
          </div>
        </section>
      </div>
      </Container>
    );
  }
}

export default Section3;