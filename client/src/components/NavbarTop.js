import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

class NavbarTop extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
    return(
      <Navbar color="dark" dark expand="sm" className="mn-5 fixed-top section-navbar">
        <Container>
          <NavbarBrand href="/" id="logo"></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#section-1">Section 1</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#section-2">Section 2</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#section-3">Section 3</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavbarTop; 