import React, { Component } from "react";
import { Container } from "reactstrap"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import NavbarTop from "./components/NavbarTop";
import Main from "./components/Main";

import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <NavbarTop />
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;