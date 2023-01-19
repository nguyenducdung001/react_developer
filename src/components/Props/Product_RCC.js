import React, { Component } from "react";

export default class Product_RCC extends Component {
  render() {
    const { hinhAnh, tenPhim } = this.props.movie;
    return (
      <div className="card text-left">
        <img className="card-img-top" src={hinhAnh} alt />
        <div className="card-body">
          <h4 className="card-title">{tenPhim}</h4>
          {/* <p className="card-text">Body</p> */}
          <button className="btn btn-outline-warning">Detail Movie</button>
        </div>
      </div>
    );
  }
}
