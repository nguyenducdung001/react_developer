import React, { Component } from "react";

export default class Product extends Component {
  render() {
    let { hinhAnh, tenSP, giaBan } = this.props.product;
    let { watchDetail } = this.props;
    return (
      <div className="container">
        <div className="card text-left">
          <img className="card-img-top" src={hinhAnh} alt />
          <div className="card-body text-center">
            <h4 className="card-title">{tenSP}</h4>
            <p className="card-text">{giaBan}$</p>
            <a
              href="#"
              className="btn btn-outline-danger mr-2"
              data-toggle="modal"
              data-target="#modelId"
              onClick={() => {
                watchDetail(this.props.product);
              }}
            >
              Detail
            </a>
            <a href="#" className="btn btn-outline-warning">
              Cart
            </a>
          </div>
        </div>
      </div>
    );
  }
}
