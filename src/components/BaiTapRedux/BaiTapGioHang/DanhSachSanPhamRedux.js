import React, { Component } from "react";
import data from "../../../data/phoneData.json";
import SanPhamRedux from "./SanPhamRedux";

export default class DanhSachSanPhamRedux extends Component {
  renderSanPham = () => {
    return data.map((sp, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPhamRedux sp={sp} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="text-secondary text-center">Danh sách sản phẩm</h3>
        <div className="row">{this.renderSanPham()}</div>
      </div>
    );
  }
}
