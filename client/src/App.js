import React, { Component } from 'react';
import NavbarTop from './components/NavbarTop';
import Landing from './components/Landing';
import Footer from './components/Footer';

import { Container } from "reactstrap"
import { Provider } from "react-redux";
import store from "./store";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <div className="App">
          <NavbarTop />
          <Container className="main" style={{ padding: "0", margin: "0" }}>
            <Landing />
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