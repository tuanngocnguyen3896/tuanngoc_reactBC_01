import React, { Component } from "react";

export default class SanPhamDemo extends Component {
  render() {
    const {sanPham,xemCT,themGioHang} = this.props;
    return (
      <div className="card text-white bg-dark">
        <img width={100} height={300} className="card-img-top" src={sanPham.hinhAnh} alt={sanPham.hinhAnh} />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.giaBan}</p>
          <button onClick={()=>xemCT(sanPham)} className="btn btn-success">Xem chi tiết !</button>
          <button onClick={()=>themGioHang(sanPham)} className="btn btn-danger ml-2">Thêm Giỏ Hàng</button>
        </div>
      </div>
    );
  }
}
