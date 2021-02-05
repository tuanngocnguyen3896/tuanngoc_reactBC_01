import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClick = () => {
    alert("hello BC");
  };
  showMessage = (name) => {
    alert("hello:" + name);
  };

  render() {
    return (
      <div>
        {/* Cách 1: truyền callback trực tiếp  */}
        <button
          onClick={this.handleClick}
          id="btnClickMe"
          className="btn btn-success"
        >
          Click me !
        </button>
        <button
          onClick={this.showMessage.bind(this, "ABC")}
          className="btn btn-info"
        >
          Show mess!
        </button>
        <br />
        {/* Cách 2: truyền hàm nặc danh (thường sử dụng) */}
        <button
          onClick={(event) => {
            this.showMessage("XYZ");
            this.handleClick();
          }}
          className="btn btn-danger"
        >
          Show mess!
        </button>
      </div>
    );
  }
}
