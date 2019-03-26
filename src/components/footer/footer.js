import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <nav className="MyFooter_Nav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Expertise </a>
            </li>
            <li>
              <a href="#">Insight </a>
            </li>
            <li>
              <a href="#">Ministry </a>
            </li>
            <li>
              <a href="#">Learn</a>
            </li>
            <li>
              <a href="#"> Media</a>
            </li>
            <li>
              <a href="#"> Contact</a>
            </li>
          </ul>
        </nav>
      </footer>
    );
  }
}

export default Footer;
