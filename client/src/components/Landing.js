import React, { Component } from 'react';
import {
  Container
} from 'reactstrap';

import { faBellSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Landing extends Component {
  render(){
    return(
      <Container
        style={{ padding: "0", margin: "0" }}
      >
        <div id="section0">
          <div id="section-landing">
            <img src="logo.png" classname="logo" alt="QPT"></img>
            <div className="section-imgtext">
              <h1>Welcome to QPT</h1>
            </div>
            <div className="text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, earum ipsam culpa et sunt voluptatem sed nisi? Laboriosam a ipsam tempora eveniet maiores enim maxime tenetur ratione saepe, aperiam dolorum eligendi suscipit quas vitae cum tempore, odit magnam at perspiciatis debitis neque necessitatibus, corporis soluta! Deserunt ipsa ullam aliquid excepturi.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, earum ipsam culpa et sunt voluptatem sed nisi? Laboriosam a ipsam tempora eveniet maiores enim maxime tenetur ratione saepe, aperiam dolorum eligendi suscipit quas vitae cum tempore, odit magnam at perspiciatis debitis neque necessitatibus, corporis soluta! Deserunt ipsa ullam aliquid excepturi.</p>
            </div>
          </div>
          <section className="section-img">
            <div className="section-imgtext">
              <h2>
                <FontAwesomeIcon icon={faBellSlash} />
                &nbsp;Cunt&nbsp;
                <FontAwesomeIcon icon={faBellSlash} />
              </h2>
            </div>
          </section>
        </div>
      </Container>
    );
  }
}

export default Landing;