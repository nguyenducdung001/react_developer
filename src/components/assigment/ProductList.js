import React, { Component } from "react";
import Product from "./Product";

export default class ProductList extends Component {
  renderProduct = () => {
    let { product, watchDetail } = this.props;

    return product.map((item, index) => {
      return (
        <div className="col-3">
          <Product watchDetail={watchDetail} key={index} product={item} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <h3 className="text-center">BEST SMARTPHONE</h3>
        <div className="row">{this.renderProduct()}</div>
      </div>
    );
  }
}
