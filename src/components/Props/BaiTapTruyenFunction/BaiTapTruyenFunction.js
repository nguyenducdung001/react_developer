import React, { Component } from "react";

import DanhSachSanPham from "./DanhSachSanPham";
import { dataPhone } from "./dataPhone";

export default class BaiTapTruyenFunction extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-center text-warning">BAI TAP TRUYEN FUNCTION</h3>
        <DanhSachSanPham product={dataPhone} />
      </div>
    );
  }
}
