import React, { Component } from "react";

export default class SanPhamChiTiet extends Component {
  render() {
    let { detailProduct } = this.props;
    return (
      <div className="row">
        <div className="col-6 text-center">
          <h3>{detailProduct.tenSP}</h3>
          <img src={detailProduct.hinhAnh} width={300} />
        </div>
        <div className="col-6">
          <h3>Tech Information</h3>
          <table className="table">
            <tr>
              <th>Screen</th>
              <th>{detailProduct.manHinh}</th>
            </tr>
            <tr>
              <th>System</th>
              <th>{detailProduct.heDieuHanh}</th>
            </tr>
            <tr>
              <th>Front Camera</th>
              <th>{detailProduct.cameraTruoc}</th>
            </tr>
            <tr>
              <th>Back Camera</th>
              <th>{detailProduct.cameraSau}</th>
            </tr>
            <tr>
              <th>RAM</th>
              <th>{detailProduct.ram}</th>
            </tr>
            <tr>
              <th>ROM</th>
              <th>{detailProduct.rom}</th>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
