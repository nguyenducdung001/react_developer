import React, { Component } from "react";
import data from "../../data/dataMovie.json";

export default class Loop extends Component {
  state = {
    mangPhim: data,
  };

  renderMangPhim = () => {
    return this.state.mangPhim.content.map((phim, index) => {
      return (
        <div className="card text-center col-3 py-5 " key={index}>
          <img
            style={{ height: "400px", objectFit: "cover" }}
            className="card-img-top"
            src={phim.hinhAnh}
            alt
          />
          <div className="card-body">
            <h5 className="card-title">{phim.tenPhim}</h5>
            <p className="card-text">
              {phim.moTa.length > 100
                ? phim.moTa.slice(0, 100) + "..."
                : phim.moTa}
            </p>
          </div>
        </div>
      );
    });
  };

  render() {
    console.log(this.state.mangPhim);
    return (
      <div className="container-fluid">
        <div className="row">{this.renderMangPhim()}</div>
      </div>
    );
  }
}
