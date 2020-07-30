import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Card, Button, Col } from "react-bootstrap";

function Product() {
  return (
    <div className="App">
      <body>
        <Container fluid="md">
          <Row>
            <Col>
              <Card style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/200"
                ></Card.Img>
                <Card.Body>
                  <Card.Title>Product 1</Card.Title>
                  <Card.Text>Some text ...</Card.Text>
                  <Card.Text>€3.99</Card.Text>
                  <Button variant="primary">Add to Card</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/200"
                ></Card.Img>
                <Card.Body>
                  <Card.Title>Product 2</Card.Title>
                  <Card.Text>Some text ...</Card.Text>
                  <Card.Text>€6.99</Card.Text>
                  <Button variant="primary">Add to Card</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/200"
                ></Card.Img>
                <Card.Body>
                  <Card.Title>Product 3</Card.Title>
                  <Card.Text>Some text ...</Card.Text>
                  <Card.Text>€2.99</Card.Text>
                  <Button variant="primary">Add to Card</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/200"
                ></Card.Img>
                <Card.Body>
                  <Card.Title>Product 4</Card.Title>
                  <Card.Text>Some text ...</Card.Text>
                  <Card.Text>€5.99</Card.Text>
                  <Button variant="primary">Add to Card</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col sm>
              <Card style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/200"
                ></Card.Img>
                <Card.Body>
                  <Card.Title>Product 5</Card.Title>
                  <Card.Text>Some text ...</Card.Text>
                  <Card.Text>€1.99</Card.Text>
                  <Button variant="primary">Add to Card</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </body>
    </div>
  );
}

export default Product;
