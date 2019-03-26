import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import "./App.css";
import Header from "./components/header/header";
import MainPage from "./components/pages/mainpage";
import Footer from "./components/footer/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainPage />
        <Footer />
      </div>
    );
  }
}

export default App;
