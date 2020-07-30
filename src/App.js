import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Cart from "./cart";
import Product from "./product";
import { Route, BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <nav class="nav">
            <a class="nav-link" href="/product">
              Product List
            </a>
            <a class="nav-link" href="/cart">
              Shopping Cart
            </a>
          </nav>
          <hr></hr>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/product" component={Product}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
