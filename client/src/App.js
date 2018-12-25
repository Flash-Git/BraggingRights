import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Landing from './components/Landing';
import AppFooter from './components/AppFooter';

import { Container } from "reactstrap"
import { Provider } from "react-redux";
import store from "./store";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container className="main" style={{ padding: "0", margin: "0" }}>
            <Landing />
          </Container>
          <footer>
            <AppFooter />
          </footer>
        </div>
      </Provider>
    );
  }
}

export default App;