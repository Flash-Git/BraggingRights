import React, { Component } from "react";
import {
  Container
} from "reactstrap";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Section2 extends Component {
  render(){
    return(
      <Container
        style={{ padding: "0", margin: "0" }}
      >
        <div className="section" id="section2">
          <div className="anchor" id="section-2"></div>
          <section className="section-img">
            <div className="section-imgtext">
              <a href="#section-2">
                <h2>
                  <FontAwesomeIcon icon={faDesktop} />
                  &nbsp;Web Dev&nbsp;
                  <FontAwesomeIcon icon={faDesktop} />
                </h2>
              </a>
            </div>
          </section>
          <section className="section-text">
            <div className="first">
              <p>IMAGE OF THIS SITE</p>
              <p>IMAGE OF ANOTHER IMPLEMENTATION</p>
            </div>
            <div className="second">
              <p>
                Web development has been around for longer than I have, it's not possible for one person to truly catch up,
                let alone learn it all.
                But this year I've reached a point where I can confidently say that there isn't a language,
                tech stack or development tool that I couldn't pick up in record time if it was required of me.
              </p>
            </div>
            <div className="third">
              <p>I put off learning more than the very basics for years. When I told people of the projects I've worked on, console outputs clearly wasn't what they had in mind.</p>
              <p>Learning web develoment was a very different experience to learning anything related to blockchains. The abundance of tech stacks, libraries and corresponding resources was quite daunting. I hate making uninformed decisions so choosing what to focus on is what took a majority of my time</p>
            </div>
          </section>
        </div>
      </Container>
    );
  }
}

export default Section2;