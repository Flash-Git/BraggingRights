import React, { Component } from "react";
import { Container } from "reactstrap"
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import Landing from "./main/Landing";
import Section1 from "./main/Section1";
import Section2 from "./main/Section2";
import Section3 from "./main/Section3";
import Footer from "./Footer";

class Main extends Component {
  render(){
    return(
      <div>
        <Container className="main" style={{ padding: "0", margin: "0" }}>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/projects' component={Projects}/>
          </Switch>
        </Container>          
      </div>
    );
  }
}

class Home extends Component {
  render(){
    return(
      <div>
        <header className="showcase">
          <Landing />
        </header>
          <Section1 />
          <Section2 />
          <Section3 />
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
};

class Projects extends Component {
  render(){
    return(
      <div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
};

export default Main;