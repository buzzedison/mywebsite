import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Carousel,
  Jumbotron
} from "react-bootstrap";

import slidera from "./a.png";
import sliderb from "./b.png";
import sliderc from "./c.png";
import biss from "./biss.png";
import code from "./code.png";
class MainPage extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col sm="6">
            <Carousel>
              <Carousel.Item>
                <img
                  src={slidera}
                  text="Second slide&bg=282c34"
                  alt="first slide"
                />
                <Carousel.Caption>
                  <h3>Business Coaching</h3>
                  <p>I can help your business succeed</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={sliderb}
                  text="Second slide&bg=282c34"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>The Big Picture </h3>
                  <p>Insight</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={sliderc} alt="Third slide" />

                <Carousel.Caption>
                  <h3>Bible before breakfast</h3>
                  <p>Let us study the bible together</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col sm="3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={biss} />
              <Card.Body>
                <Card.Title>Business Coaching</Card.Title>
                <Card.Text>
                  Want to start a business, learn to pitch your business to
                  investors, learn to inspire and lead your team, business
                  development.
                </Card.Text>
                <Button variant="primary">Sign up now!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="3">
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={code} />
              <Card.Body>
                <Card.Title>Learn to Code</Card.Title>
                <Card.Text>
                  JavaScript, React, Ruby on Rails, Python. Take your first
                  course for free. Course begins May 20, 2019.
                </Card.Text>
                <Button variant="primary">Sign up now!</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm="12" className="subs">
            <Jumbotron>
              <p>
                Sign up to recieve my free ebook on Introduction to programming
                or "From Idea to Implementation"
              </p>
              <input
                type="email"
                id="email"
                placeholder="enter your email address"
                className="email"
              />
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainPage;
