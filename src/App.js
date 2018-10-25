import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
// import  { Host } from './components/container';
import Header from "./components/Header";
import Main from "./components/Main";

import { Grid, Cell } from "react-md";

class App extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell size={12}>
            <Header />
          </Cell>
          <Cell size={12}>
            <Main />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default App;
