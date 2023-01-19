import React, { Component } from "react";

export default class DemoCircle extends Component {
  state = {
    maSanPham: [
      { ma: "1", ten: "Iphone X", gia: "1000" },
      { ma: "2", ten: "SamSung Galaxy Note 10", gia: "2000" },
      { ma: "3", ten: "Vivo luxury 7", gia: "3000" },
    ],
  };

  renderProduct = () => {
    // let contentTable = [];

    // for (let i = 0; i < this.state.maSanPham.length; i++) {
    //   let item = this.state.maSanPham[i];

    //   contentTable.push(
    //     <tr key={i}>
    //       <td>{item.ma}</td>
    //       <td>{item.ten}</td>
    //       <td>{item.gia}</td>
    //     </tr>
    //   );
    // }

    // return contentTable;

    return this.state.maSanPham.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.ma}</td>
          <td>{item.ten}</td>
          <td>{item.gia}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container ">
        <h3 className="bg-dark text-center text-white p-5">
          Demo Circle React
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th>Mã sản phẩm</th>
              <th>Tên sản phẩm</th>
              <th>Giá sản phẩm</th>
            </tr>
          </thead>
          <tbody>{this.renderProduct()}</tbody>
        </table>
      </div>
    );
  }
}
