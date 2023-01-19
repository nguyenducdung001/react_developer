import React, { Component } from "react";
// Kết nối reactComponent với reduxStore
import { connect } from "react-redux";

class ModalGioHangRedux extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.maSP}</td>
          <td>{item.tenSP}</td>
          <td>
            <img src={item.hinhAnh} width={75} />
          </td>
          <td>{item.giaBan}</td>
          <td>
            <button
              onClick={() => {
                this.props.tangGiamSoLuong(index, false);
              }}
              className="btn btn-outline-secondary"
            >
              -
            </button>
            {item.soLuong}
            <button
              onClick={() => {
                this.props.tangGiamSoLuong(index, true);
              }}
              className="btn btn-outline-secondary"
            >
              +
            </button>
          </td>
          <td>{item.giaBan * item.soLuong}</td>
          <td>
            <button
              onClick={() => {
                this.props.xoaGioHangIndex(index);
              }}
              className="btn btn-outline-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Tên SP</th>
              <th>Hình ảnh</th>
              <th>Giá bán</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
          <tfoot>
            <td colSpan={5}></td>
            <td>Tổng tiền:</td>
            <td>
              {this.props.gioHang.reduce((tongTien, spGioHang, index) => {
                return (tongTien += spGioHang.soLuong * spGioHang.giaBan);
              }, 0)}
            </td>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //state là store tổng truy xuât đến biến GioHangReducer
  return {
    gioHang: state.gioHangReducer.gioHang, //Tạo ra một props của component ModalGioHangRedux
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHangIndex: (index) => {
      const action = {
        type: "XOA_GIO_HANG",
        index,
      };

      // Đưa action lên reducer
      dispatch(action);
    },
    tangGiamSoLuong: (index, tangGiam) => {
      const action = {
        type: "TANG_GIAM_SL",
        index,
        tangGiam,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalGioHangRedux);
