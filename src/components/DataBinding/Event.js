import React, { Component } from "react";

export default class Event extends Component {
  handleShowMessage = (message) => {
    alert(message);
  };

  render() {
    let message = "Happy New Year";
    return (
      <div className="container">
        <button
          onClick={this.handleShowMessage.bind(this, message)}
          className="btn"
        >
          Show message
        </button>
        <button
          onClick={() => {
            this.handleShowMessage(message);
          }}
          className="btn btn-outline-success"
        >
          Show message
        </button>
      </div>
    );
  }
}
