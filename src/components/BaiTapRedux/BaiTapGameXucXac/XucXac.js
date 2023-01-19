import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {
  renderXucXac = () => {
    return this.props.mangXucXac.map((xucXac, index) => {
      return <img key={index} width={100} src={xucXac.hinhAnh} alt="" />;
    });
  };

  render() {
    return <div>{this.renderXucXac()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    mangXucXac: state.BaiTapGameXucXacReducer.mangXucXac,
  };
};
export default connect(mapStateToProps, null)(XucXac);
