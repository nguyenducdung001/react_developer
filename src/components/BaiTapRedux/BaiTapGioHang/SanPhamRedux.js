import React, { Component } from "react";
import { connect } from "react-redux";

class SanPhamRedux extends Component {
  render() {
    const { sp } = this.props;
    return (
      <div className="card bg-dark text-white">
        <img className="card-img-top" src={sp.hinhAnh} height={400} alt />
        <div className="card-body">
          <h4 className="card-title">{sp.tenSP}</h4>
          <p className="card-text">{sp.giaBan}</p>
          <button
            onClick={() => {
              this.props.themGioHang(sp);
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

// Xây dựng hàm tạo ra props là hàm xử lý sự kiện => đưa dữ liệu lên store

const mapDispatchToProps = (dispatch) => {
  return {
    // Tạo ra props giỏ hàng => đưa dữ liệu lên store
    themGioHang: (sanPham) => {
      const spGioHang = {
        maSP: sanPham.maSP,
        tenSP: sanPham.tenSP,
        giaBan: sanPham.giaBan,
        soLuong: 1,
        hinhAnh: sanPham.hinhAnh,
      };
      const action = {
        type: "THEM_GIO_HANG",
        spGioHang: spGioHang,
      };
      console.log(action);
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(SanPhamRedux);
