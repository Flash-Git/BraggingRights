import React, { Component } from "react";
import {
  Container
} from "reactstrap";

class Landing extends Component {
  render(){
    return(
      <Container
        style={{ padding: "0", margin: "0" }}
      >
        <div id="section0">
          <div id="section-landing">
            <div className="section-imgtext">
              <h1>Welcome to QPT</h1>
            </div>
            <div className="section-landingtext">
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Landing;