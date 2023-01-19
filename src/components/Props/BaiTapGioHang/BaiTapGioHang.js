import React, { Component } from "react";
import DanhSachSanPhamGioHang from "./DanhSachSanPhamGioHang";
import ModalGioHang from "./ModalGioHang";
import phoneData from "../../../data/phoneData.json";

export default class BaiTapGioHang extends Component {
  state = {
    gioHang: [],
  };

  themGioHang = (pr) => {
    // Tạo biến chứa sản phẩm chọn để thêm vào
    let prCart = {
      maSP: pr.maSP,
      tenSP: pr.tenSP,

      giaBan: pr.giaBan,
      hinhAnh: pr.hinhAnh,
      soLuong: 1,
    };

    // Kiểm tra giỏ hàng
    let updateCart = [...this.state.gioHang];
    let index = updateCart.findIndex((sp) => {
      return sp.maSP === prCart.maSP;
    });
    if (index === -1) {
      updateCart.push(prCart);
    } else {
      updateCart[index].soLuong += 1;
    }
    // setState ra màn hình
    this.setState({
      gioHang: updateCart,
    });
  };

  // Đặt sự kiện xóa giỏ hàng tại BTGioHang

  xoaGioHang = (maSP) => {
    // let gioHangCapNhat = [...this.state.gioHang];
    // let index = gioHangCapNhat.findIndex((pr) => pr.maSP === maSP);
    // if (index !== -1) {
    //   gioHangCapNhat.splice(index, 1);
    // }

    let gioHangCapNhat = this.state.gioHang.filter((sp) => sp.maSP !== maSP);

    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  // Tăng giảm số lượng trong giỏ hàng

  tangGiamSoLuong = (maSP, tangGiam) => {
    let gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSP);
    if (tangGiam) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      if (gioHangCapNhat[index].soLuong > 1) {
        gioHangCapNhat[index].soLuong -= 1;
      }
    }
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  render() {
    let tongSoLuong = this.state.gioHang.reduce((tsl, sp, index) => {
      return (tsl += sp.soLuong);
    }, 0);

    return (
      <div className="container">
        <h3 className="text-center text-secondary">Bài tập giỏ hàng</h3>
        <ModalGioHang
          tangGiamSoLuong={this.tangGiamSoLuong}
          xoaGioHang={this.xoaGioHang}
          gioHang={this.state.gioHang}
        />
        <div className="text-right">
          <span
            data-toggle="modal"
            data-target="#modelId"
            className="btn btn-secondary py-2"
            style={{ cursor: "pointer", fontSize: "17px", fontWeight: "bold" }}
          >
            Cart ({tongSoLuong})
          </span>
        </div>
        <DanhSachSanPhamGioHang
          themGioHang={this.themGioHang}
          mangSanPham={phoneData}
        />
      </div>
    );
  }
}
