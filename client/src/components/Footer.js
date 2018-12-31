import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import { faGithub, faEthereum, faBitcoin } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  render(){
    return(
      <Container
        style={{ padding: "0", margin: "0" }}
      >
        <Navbar dark color="dark">
          <Nav navbar
            style={{ width:"100%", height:"100%"}}
          >
          <div className="section-footer">
            <div className="links">
              <div className="github">
                <NavItem>
                  <NavLink href="https://github.com/flash-git">
                    <FontAwesomeIcon icon={faGithub} />
                    &nbsp;Github
                  </NavLink>
                </NavItem>
              </div>
              <div className="inquiries">
                <NavItem>
                  <NavLink href="/">
                    <FontAwesomeIcon icon={faAt} />
                    &nbsp;Business Inquiries
                  </NavLink>
                </NavItem>
              </div>
            </div>
            <div className="addresses">
              <div className="ethereum">
                  <NavItem>
                    <NavLink href="/">
                      <FontAwesomeIcon icon={faEthereum} />
                      &nbsp;Ethereum Address
                    </NavLink>
                  </NavItem>
                </div>
                <div className="bitcoin">
                  <NavItem>
                    <NavLink href="/">
                      <FontAwesomeIcon icon={faBitcoin} />
                      &nbsp;Bitcoin Address
                    </NavLink>
                  </NavItem>
                </div>
              </div>
            </div>
          </Nav>
        </Navbar>
      </Container>
    );
  }
}

export default Footer;