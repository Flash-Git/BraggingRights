import React, { Component } from 'react';
import AppFooter from './components/AppFooter';
import Landing from './components/Landing';

import { Container } from "reactstrap"
import { Provider } from "react-redux";
import store from "./store";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Container className="main">
            <Landing />
          </Container>
          <footer className="footer">
            <AppFooter />
          </footer>
        </div>
      </Provider>
    );
  }
}

export default App;