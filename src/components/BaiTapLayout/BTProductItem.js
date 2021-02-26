import React, { Component } from "react";

export default class BTProductItem extends Component {
  render() {
    const { sanPham } = this.props;
    return (
      <div className="card text-white bg-dark">
        <img className="card-img-top" src={sanPham.hinhAnh} alt={sanPham.hinhAnh}
        width={200} height={300} />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.maSP}</p>
          <p className="card-text">{sanPham.gia}</p>
        </div>
      </div>
    );
  }
}
