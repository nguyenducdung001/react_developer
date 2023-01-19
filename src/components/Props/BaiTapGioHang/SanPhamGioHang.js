import React, { Component } from "react";

export default class SanPhamGioHang extends Component {
  render() {
    const { sanPham, themGioHang } = this.props;
    return (
      <div className="card text-white bg-dark">
        <img
          width={200}
          height={350}
          className="card-img-top"
          src={sanPham.hinhAnh}
          alt
        />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <button
            onClick={() => {
              themGioHang(sanPham);
            }}
            className="btn btn-outline-warning"
          >
            Add To Cart
          </button>
        </div>
      </div>
    );
  }
}
