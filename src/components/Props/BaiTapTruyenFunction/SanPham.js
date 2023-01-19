import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { item } = this.props;
    return (
      <div className="col-4">
        <div className="card ">
          <img className="card-img-top" src={item.hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{item.tenSP}</h4>
            <button
              onClick={() => {
                this.props.watchDetail(item);
              }}
              className="btn btn-outline-warning"
            >
              Detail
            </button>
          </div>
        </div>
      </div>
    );
  }
}
