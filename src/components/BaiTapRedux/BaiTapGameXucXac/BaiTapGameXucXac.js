import React, { Component } from "react";
import "../font/GameXucXac.css";
import ThongTinTroChoi from "./ThongTinTroChoi";
import XucXac from "./XucXac";
import { connect } from "react-redux";

class BaiTapGameXucXac extends Component {
  render() {
    return (
      <div className="game">
        <div className="title_game text-center mt-5 display-4">
          Game Đổ Xúc Xắc
        </div>
        <div className="row text-center mt-5">
          <div className="col-4">
            <button
              onClick={() => {
                this.props.datCuoc(true);
              }}
              className="btnGame"
            >
              TÀI
            </button>
          </div>
          <div className="col-4">
            <XucXac />
          </div>
          <div className="col-4">
            <button
              onClick={() => {
                this.props.datCuoc(false);
              }}
              className="btnGame"
            >
              XỈU
            </button>
          </div>
        </div>
        <div className="text-center">
          <ThongTinTroChoi />
          <button
            onClick={() => {
              this.props.playGame();
            }}
            className="btn btn-success mt-5 "
          >
            Play game
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      let action = {
        type: "DAT_CUOC",
        taiXiu,
      };
      dispatch(action);
    },
    playGame: () => {
      dispatch({
        type: "PLAY_GAME",
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(BaiTapGameXucXac);
