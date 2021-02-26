import React, { Component } from "react";
import BTProductItem from "./BTProductItem";

export default class BTProductList extends Component {
  mangSanPham = [
    { maSP: 1,tenSP: "Black Berry",hinhAnh: "./img/sp_blackberry.png",gia: 1000,},
    { maSP: 2, tenSP: "Iphone X", hinhAnh: "./img/sp_iphoneX.png", gia: 2000 },
    { maSP: 3, tenSP: "Note 7", hinhAnh: "./img/sp_note7.png", gia: 3000 },
    { maSP: 4, tenSP: "Vivo 850", hinhAnh: "./img/sp_vivo850.png", gia: 4000 },
  ];

  renderSanPham = () => {
    return this.mangSanPham.map((sanPham, index) => {
      return (
        <div key={index} className="col-3">
          <BTProductItem sanPham={sanPham}/>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container-fluid bg-dark py-5">
        <h1 className="text-center text-white">BEST SMART PHONE</h1>
        <div className="row">
        {this.renderSanPham()}
          {/* <div className="col-3">
            {" "}
            <BTProductItem />
          </div>
          <div className="col-3">
            {" "}
            <BTProductItem />
          </div>
          <div className="col-3">
            {" "}
            <BTProductItem />
          </div>
          <div className="col-3">
            {" "}
            <BTProductItem />
          </div> */}
        </div>
      </div>
    );
  }
}
