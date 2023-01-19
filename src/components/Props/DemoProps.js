import React, { Component } from "react";
import data from "../../data/dataMovie.json";
import Product_RCC from "./Product_RCC";
import Product_RFC from "./Product_RFC";

export default class DemoProps extends Component {
  state = {
    movie: data,
  };

  renderPhim = () => {
    return this.state.movie.content.map((item, index) => {
      return (
        <div className="col-3" key={index}>
          {/* <Product_RFC movie={item} /> */}
          <Product_RCC movie={item} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">{this.renderPhim()}</div>
      </div>
    );
  }
}
