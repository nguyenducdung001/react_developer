import React, { Component } from "react";

export default class ModalGioHang extends Component {
  renderGioHang = () => {
    let { xoaGioHang, gioHang, tangGiamSoLuong } = this.props;
    return gioHang.map((sp, index) => {
      return (
        <tr key={index}>
          <td>{sp.maSP}</td>
          <td>
            {" "}
            <img src={sp.hinhAnh} width={70} />
          </td>
          <td>{sp.tenSP}</td>
          <td>
            <button
              onClick={() => {
                tangGiamSoLuong(sp.maSP, false);
              }}
              className="btn btn-outline-secondary"
            >
              -
            </button>
            {sp.soLuong}
            <button
              onClick={() => {
                tangGiamSoLuong(sp.maSP, true);
              }}
              className="btn btn-outline-secondary"
            >
              +
            </button>
          </td>
          <td>{sp.giaBan}</td>
          <td>{sp.giaBan * sp.soLuong}</td>
          <td>
            <button
              onClick={() => {
                xoaGioHang(sp.maSP);
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
    const { gioHang } = this.props;

    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div
            className="modal-content "
            style={{ width: "800px", maxWidth: "800px" }}
          >
            <div className="modal-header">
              <h5 className="modal-title">Cart</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <td>Mã SP</td>
                    <td>Hình ảnh</td>
                    <td>Tên SP</td>
                    <td>Số lượng</td>
                    <td>Đơn giá</td>
                    <td>Thành tiền</td>
                    <td>Thao tác</td>
                  </tr>
                </thead>
                <tbody>{this.renderGioHang()}</tbody>
                <tfoot>
                  <tr>
                    <td colSpan={5}></td>
                    <td>Tổng tiền</td>
                    <td>
                      {this.props.gioHang.reduce((tongTien, sp, index) => {
                        return (tongTien += sp.soLuong * sp.giaBan);
                      }, 0)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
