import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col, Table, Button } from "react-bootstrap";

function calculate() {
  var table = document.getElementById("table");
  var count = table.getElementsByTagName("tr").length;
  if (count > 0) {
    var total = 0;
    for (var i = 1; i < count; i++) {
      total +=
        table.rows[i].cells[3].innerHTML * table.rows[i].cells[5].innerHTML;
    }
  }
  document.getElementById("total").innerHTML =
    "Total price: €" + total.toFixed(2);
}

function Cart() {
  return (
    <div className="App">
      <body
        onLoad={setTimeout(() => {
          calculate();
        })}
      >
        <Container>
          <h1>Shopping Cart</h1>
          <Row>
            <Table table table-hover id="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Description</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>VAT</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Product 1</td>
                  <td>Some text ...</td>
                  <td>3</td>
                  <td>3.99</td>
                  <td>4.75</td>
                  <td>
                    <Button variant="warning">Edit</Button>{" "}
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Product 2</td>
                  <td>Some text ...</td>
                  <td>1</td>
                  <td>6.99</td>
                  <td>8.32</td>
                  <td>
                    <Button variant="warning">Edit</Button>{" "}
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Product 3</td>
                  <td>Some text ...</td>
                  <td>5</td>
                  <td>2.99</td>
                  <td>3.56</td>
                  <td>
                    <Button variant="warning">Edit</Button>{" "}
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Product 4</td>
                  <td>Some text ...</td>
                  <td>2</td>
                  <td>5.99</td>
                  <td>7.13</td>
                  <td>
                    <Button variant="warning">Edit</Button>{" "}
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Product 5</td>
                  <td>Some text ...</td>
                  <td>6</td>
                  <td>1.99</td>
                  <td>2.37</td>
                  <td>
                    <Button variant="warning">Edit</Button>{" "}
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
          <hr></hr>
          <Row>
            <Col>
              <p id="total"></p>
            </Col>
            <Col>
              <Button variant="primary" style={{ float: "right" }}>
                Buy
              </Button>
            </Col>
          </Row>
        </Container>
      </body>
    </div>
  );
}

export default Cart;
