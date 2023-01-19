import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <section className="container-fluid pt-5 pb-5 bg-dark">
        <h1 className="text-center text-white">PROMOTION</h1>
        <div className="container bg-light pt-5 pb-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="container">
                <img
                  style={{ width: "100%" }}
                  src="./img/promotion.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="container">
                <img
                  style={{ width: "100%" }}
                  src="./img/promotion.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="container">
                <img
                  style={{ width: "100%" }}
                  src="./img/promotion.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
