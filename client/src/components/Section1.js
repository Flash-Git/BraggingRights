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
              <h4>Uses</h4>
              <p>I have a very hands on approach to web3, staying up to date on the web3 landscape</p>
            </div>
            <div className="second">
              <h3>Development</h3>
              <div className="first">
                <h4>Web3.js</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt recusandae dignissimos libero, eveniet eos voluptas!</p>
              </div>
              <div className="second">
                <h4>Contracts</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, eaque!</p>
              </div>
            </div>
          </section>
        </div>
      </Container>
    );
  }
}

export default Section1;