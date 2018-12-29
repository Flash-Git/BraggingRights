import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class Footer extends Component {
  render(){
    return(
      <Navbar dark color="dark" className="section-footer">
        <Container>
          <NavbarBrand href="/">Footer</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/flash-git">Github</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Support</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Footer;