import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import { faGithub, faTwitter, faEthereum, faBitcoin, faYoutube } from "@fortawesome/free-brands-svg-icons";
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
                <div className="link">
                  <NavItem>
                    <NavLink href="https://github.com/flash-git">
                      <FontAwesomeIcon icon={faGithub} />
                      &nbsp;Github
                    </NavLink>
                  </NavItem>
                </div>
                <div className="link">
                  <NavItem>
                    <NavLink href="https://youtube.com/">
                      <FontAwesomeIcon icon={faYoutube} />
                      &nbsp;Youtube
                    </NavLink>
                  </NavItem>
                </div>
                <div className="link">
                  <NavItem>
                    <NavLink href="https://twitter.com/flashyqpt">
                      <FontAwesomeIcon icon={faTwitter} />
                      &nbsp;Twitter
                    </NavLink>
                  </NavItem>
                </div>
                <div className="link">
                  <NavItem>
                    <NavLink href="/">
                      <FontAwesomeIcon icon={faAt} />
                      &nbsp;Business Inquiries
                    </NavLink>
                  </NavItem>
                </div>
              </div>
              <div className="addresses">
              <div className="link">
                  <NavItem>
                    <NavLink href="/">
                      <FontAwesomeIcon icon={faEthereum} />
                      &nbsp;Ethereum Address
                    </NavLink>
                  </NavItem>
                </div><div className="link">
                  <NavItem>
                    <NavLink href="/">
                      <FontAwesomeIcon icon={faEthereum} />
                      &nbsp;Ethereum Address
                    </NavLink>
                  </NavItem>
                </div>
                <div className="link">
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