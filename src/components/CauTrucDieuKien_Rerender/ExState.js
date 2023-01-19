import React, { Component } from "react";

export default class ExState extends Component {
  state = {
    img: "./img/black-car.jpg",
  };

  changeColor = (color) => {
    this.setState({
      img: `./img/${color}-car.jpg`,
    });
  };

  render() {
    const styleButton = {
      color: "#fff",
      marginRight: "5px",
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h3> Please choose your favourite car's color</h3>
            <img src={this.state.img} width={400} />
          </div>
          <div className="col-4">
            <h3>Change color</h3>
            <button
              onClick={() => {
                this.changeColor("red");
              }}
              className="btn btn-danger"
              style={styleButton}
            >
              Red color
            </button>
            <button
              onClick={() => {
                this.changeColor("silver");
              }}
              className="btn btn-light"
              style={{ color: "black", marginRight: "5px" }}
            >
              Silver color
            </button>
            <button
              onClick={() => {
                this.changeColor("black");
              }}
              className="btn btn-dark"
              style={{ color: "#fff", backgroundColor: "#000" }}
            >
              Black color
            </button>
          </div>
        </div>
      </div>
    );
  }
}
