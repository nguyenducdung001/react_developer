import React, { Component } from "react";

export default class DemoIf extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      username: "",
    };
  }

  login = () => {
    this.setState(
      {
        isLogin: true,
        username: "CyberSoft",
      },
      () => {
        console.log(this.state);
      }
    );
  };

  logout = () => {
    this.setState(
      {
        isLogin: false,
        username: "",
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <div className="text-center">
        {/* {this.renderContent()} */}
        {this.state.isLogin ? (
          <div>
            Hello {this.state.username}!
            <button onClick={this.logout} className="btn btn-outline-warning">
              Logout
            </button>
          </div>
        ) : (
          <button onClick={this.login} className="btn btn-outline-secondary">
            Login
          </button>
        )}
      </div>
    );
  }

  // renderContent = () => {
  //   if (this.isLogin) {
  //     this.username = "Anna";
  //     return (
  //       <div>
  //         Hello {this.username}!
  //         <button className="btn btn-outline-warning">Logout</button>
  //       </div>
  //     );
  //   }
  //   return (
  //     <div>
  //       <button className="btn btn-outline-secondary">Login</button>
  //     </div>
  //   );
  // };
}
