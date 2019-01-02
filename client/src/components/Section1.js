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
              <h3>Uses</h3>
              <p>I have a very hands on approach to web3, staying up to date on the web3 landscape</p>
              <p>I have run and used a full Geth Node on and off since early 2017</p>
            </div>
            <div className="second">
              <h3>Ethereum Development</h3>
              <div className="first">
                <h4>Web3.js</h4>
                <p>One of my first contracts forced me to get very comfortable with the Ethereum APIs.
                  I settled on web3.js https://github.com/ethereum/web3.js/ from  Ethereum. 
                  The documentation was good but often incomplete and/or confusing.
                  I got progressively more comfortable and quickly came up with my own style.</p>
              </div>
              <div className="second">
                <h4>Contracts</h4>
                <p>Ethereum's smart contracts are what drew me to ethereum in the first place.
                  I played around for months but stayed too scared of the security implications to get past that line.
                  By chance, I caught wind of one of WorkOnBlockchain's workshops and with their help, 
                  was able to move onto real projects.
                </p>
              </div>
            </div>
          </section>
        </div>
      </Container>
    );
  }
}

export default Section1;