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
                  &nbsp;Web&nbsp;
                  <FontAwesomeIcon icon={faDesktop} />
                </h2>
              </a>
            </div>
          </section>
          <section className="section-text">
            <div className="first">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fuga nostrum debitis exercitationem cumque dolorem molestias asperiores eveniet facilis! A velit, ullam tempora veritatis reprehenderit officia error deleniti quas animi.</p>
            </div>
            <div className="second">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolorem velit iusto enim modi nesciunt veritatis adipisci inventore quod recusandae.</p>
            </div>
            <div className="third">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, labore repellendus. Assumenda placeat sapiente exercitationem nostrum expedita, similique, voluptates ratione distinctio blanditiis aliquid quidem officia harum ipsa. Voluptate esse, hic consequuntur fugit porro praesentium enim sed tempora nulla perferendis deleniti vel debitis quam corrupti. Esse quisquam laborum aut perspiciatis quod.</p>
            </div>
          </section>
        </div>
      </Container>
    );
  }
}

export default Section2;