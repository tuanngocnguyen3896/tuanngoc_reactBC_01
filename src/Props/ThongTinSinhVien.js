import React, { Component } from "react";

export default class ThongTinSinhVien extends Component {
  render() {
    // this.props là thuộc tính có sẵn của react compo
    // this.state != this.props
    // Giống : binding data lên giao diện, đều là thuộc tính có sẵn
    // Khác:
    
    // this.state: quản lý các trạng thái của biến làm thay đổi giao diện
    // this.props: nhận giá trị từ compo cha truyền vào

    // this.state: có thể gán lại giá trị => gọi phương thức setState

    // let{ten,tuoi,ma} = this.props.sinhVien;
    let {sinhVien} = this.props;
    return (
      <div style={{backgroundColor:this.props.bgColor}} className="card">
        <img width="100" height="180" className="card-img-top" src="https://picsum.photos/100/180" alt="abc" />
        <div className="card-body">
          <h4 className="card-title">{sinhVien?.ten}</h4>
          <p className="card-text">{sinhVien?.ma}</p>
          <p className="card-text">{sinhVien?.tuoi}</p>

          {/* <p className="card-text">{this.props.tenSV}</p> */}
          {/* <p className="card-text">{this.props.maSV}</p> */}
        </div>
      </div>
    );
  }
}
