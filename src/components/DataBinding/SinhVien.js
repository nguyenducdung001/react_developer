import React, { Component } from "react";

export default class SinhVien extends Component {
  name = "David BecKa";
  class = "FrontEnd xx";
  group = "CyberSoft";

  renderThongTinSinhVien = () => {
    return (
      <ul>
        <li>Name: {this.name}</li>
        <li>Class: {this.class}</li>
        <li>Group: {this.group}</li>
      </ul>
    );
  };

  render() {
    return <div className="container">{this.renderThongTinSinhVien()}</div>;
  }
}
