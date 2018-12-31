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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet beatae quis aperiam perferendis porro aut, ullam nobis aspernatur obcaecati incidunt.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet beatae quis aperiam perferendis porro aut, ullam nobis aspernatur obcaecati incidunt.</p>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Landing;