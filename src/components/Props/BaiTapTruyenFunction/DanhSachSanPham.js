import React, { Component } from "react";
import { dataPhone } from "./dataPhone";
import SanPham from "./SanPham";
import SanPhamChiTiet from "./SanPhamChiTiet";

export default class DanhSachSanPham extends Component {
  state = {
    detailProduct: dataPhone[0],
  };

  renderProduct = () => {
    return dataPhone.map((item, index) => {
      return <SanPham item={item} key={index} watchDetail={this.watchDetail} />;
    });
  };

  // Đặt callback function tại DanhSachSanPham

  watchDetail = (sp) => {
    this.setState({
      detailProduct: sp,
    });
  };

  render() {
    let { detailProduct } = this.state;
    return (
      <div className="container">
        <div className="row">{this.renderProduct()}</div>

        <SanPhamChiTiet detailProduct={detailProduct} />
      </div>
    );
  }
}
