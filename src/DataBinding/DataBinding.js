import React, { Component } from "react";
import style from './DataBinding.module.css';
export default class DataBinding extends Component {
    sinhVien = {
        id:1,
        ten: 'Nguyễn Văn A'
    }
    renderSinhVien = () => {
        //Binding phương thức thì phương thức dố phải trả về nội dung là 1 số hoặ chuỗi hoặc 1 thẻ component bao phú
        return <div>
            id: {this.sinhVien.id} - ten: {this.sinhVien.ten}
        </div>
    }
    
    render() { // phương thức
    let title = "Hello CyberSoft";
    let sanPham = {
      ten: "Iphone",
      gia: 1000,
      hinhAnh: 'https://picsum.photos/200/200'
    };

    return (
      <div>
          {this.renderSinhVien()}
        <h1>{this.sinhVien.ten}</h1>
        <p className={`text-center ${style.textGreen} ${style['txt-light']}`}>abc</p>
        <p style = {{backgroundColor:'blue', color:'white'}}>aaaa</p>
        <p id="title">
          {title}
        </p>
        
        <div className="card text-white bg-primary w-25">
          <img className="card-img-top" src={sanPham.hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{sanPham.ten}</h4>
            <p className="card-text">{sanPham.gia}</p>
          </div>
        </div>
      </div>
    );
  }
}
