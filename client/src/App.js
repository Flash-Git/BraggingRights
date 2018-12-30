import React, { Component } from "react";
import { Container } from "reactstrap"
import { Provider } from "react-redux";

import NavbarTop from "./components/NavbarTop";
import Landing from "./components/Landing";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Footer from "./components/Footer";

import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <div className="App">
          <NavbarTop />
          <Container className="main" style={{ padding: "0", margin: "0" }}>
            <header className="showcase">
              <Landing />
              <Section1 />
              <Section2 />
              <Section3 />
            </header>
          </Container>
          <footer>
            <Footer />
          </footer>
        </div>
      </Provider>
    );
  }
}

export default App;