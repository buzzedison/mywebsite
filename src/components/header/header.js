import React, { Component } from "react";
import logo from "./logo.png";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <img src={logo} alt="my logo" />
        </div>
        <nav className="MyNav">
          <ul className="MyNav_ul">
            <li className="first">
              <a className="mya" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="mya" href="#">
                Expertise{" "}
              </a>
            </li>
            <li>
              <a className="mya" href="#">
                Insight{" "}
              </a>
            </li>
            <li>
              <a className="mya" href="#">
                Ministry{" "}
              </a>
            </li>
            <li>
              <a className="mya" href="#">
                Learn
              </a>
            </li>
            <li>
              <a className="mya" href="#">
                {" "}
                Media
              </a>
            </li>
            <li className="last">
              <a className="mya" href="#">
                {" "}
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
export default Header;
