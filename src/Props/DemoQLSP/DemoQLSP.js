import React, { Component } from 'react'
import GioHang from './GioHang'
import SanPhamDemo from './SanPhamDemo'

export default class DemoQLSP extends Component {
  state= {
      spChiTiet: {
        "maSP": 1,
        "tenSP": "VinSmart Live",
        "manHinh": "AMOLED, 6.2\", Full HD+",
        "heDieuHanh": "Android 9.0 (Pie)",
        "cameraTruoc": "20 MP",
        "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 5700000,
        "hinhAnh": "./img/vsphone.jpg"
      },// dùng ob lưu trữ thông tin điện thoại chi tiết
      gioHang: [
          {maSP:1,tenSP:'IPhone 12',gia:40000,soLuong:1,hinhAnh: "./img/vsphone.jpg"}
      ]
  }
  
    mangSanPham = [
    {
      "maSP": 1,
      "tenSP": "VinSmart Live",
      "manHinh": "AMOLED, 6.2\", Full HD+",
      "heDieuHanh": "Android 9.0 (Pie)",
      "cameraTruoc": "20 MP",
      "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
      "ram": "4 GB",
      "rom": "64 GB",
      "giaBan": 5700000,
      "hinhAnh": "./img/vsphone.jpg"
    },
  
    {
      "maSP": 2,
      "tenSP": "Meizu 16Xs",
      "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
      "heDieuHanh": "Android 9.0 (Pie); Flyme",
      "cameraTruoc": "20 MP",
      "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
      "ram": "4 GB",
      "rom": "64 GB",
      "giaBan": 7600000,
      "hinhAnh": "./img/meizuphone.jpg"
    },
  
    {
      "maSP": 3,
      "tenSP": "Iphone XS Max",
      "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
      "heDieuHanh": "iOS 12",
      "cameraSau": "Chính 12 MP & Phụ 12 MP",
      "cameraTruoc": "7 MP",
      "ram": "4 GB",
      "rom": "64 GB",
      "giaBan": 27000000,
      "hinhAnh": "./img/applephone.jpg"
    }
  ]

  // Chức năng thêm giỏ hàng
  // Hàm xử lí làm thay đổi state sẽ được đặt tại compo chứa state
  themGioHang = (spClick) => {
    let spGH = {
        maSP:spClick.maSP,
        tenSP:spClick.tenSP,
        gia:spClick.giaBan,
        soLuong:1,
        hinhAnh:spClick.hinhAnh
    }
    // Xử lí kiểm tra state giỏ hàng có chứa dl sản phẩm đó khi click hay chưa
    // Nếu có thì tăng sl, không thì thêm mới
    // Không nên sửa trực tiếp state mà phải sao chép 1 state mới rồi setState lại cho state mới này
    let gioHangCapNhat = [...this.state.gioHang]; 
    let index = gioHangCapNhat.findIndex(sp=>sp.maSP===spClick.maSP);
    if(index !== -1){
        gioHangCapNhat[index].soLuong += 1;
    }else{
        gioHangCapNhat.push(spGH)
    }
    // this.state.gioHang.push(spGH)
    this.setState({
        gioHang: gioHangCapNhat
    })
  }

  // Chức năng xóa sản phẩm
  xoaGioHang = (maSP) => {
    let gioHangCapNhat = [...this.state.gioHang];
    // Tìm trong giỏ hàng có sp nào trùng mã
    let index = gioHangCapNhat.findIndex(sp=>sp.maSP === maSP);
    if(index !== -1){
        gioHangCapNhat.splice(index,1);
    }
    this.setState({
        gioHang:gioHangCapNhat
    })
  };

  // Chức năng tăng giảm số lượng
  tangGiamSL = (maSP,tangGiam) => {
    let gioHangCapNhat = [...this.state.gioHang];
    // let gioHangCapNhat = this.state.gioHang.slice();
    // console.log(gioHangCapNhat);
    // Tìm trong giỏ hàng có sp nào trùng mã
    let index = gioHangCapNhat.findIndex(sp=>sp.maSP === maSP);
    if(tangGiam){
        
        gioHangCapNhat[index].soLuong += 1;
    } else {
        if(gioHangCapNhat[index].soLuong > 1){
            gioHangCapNhat[index].soLuong -= 1;
        }
    }
    this.setState({
        gioHang: gioHangCapNhat
    })
  };

  renderSanPham = () => {
    return this.mangSanPham.map((sp,index) => {
        return (
            <div key={index} className="col-4">
               {/* <div className="card text-white bg-dark">
                    <img className="card-img-top" src={sp.hinhAnh} alt={sp.hinhAnh} width={150} height={250} />
                    <div className="card-body">
                        <h4 className="card-title">{sp.tenSP}</h4>
                        <p className="card-text">{sp.giaBan}</p>
                        <button onClick={()=>this.xemChiTiet(sp)} className="btn btn-success">Xem Chi Tiết !</button>
                    </div>
                </div> */}
                <SanPhamDemo sanPham={sp} xemCT={this.xemChiTiet} themGioHang={this.themGioHang} />
            </div>
        )
    })
    
  }
   
  xemChiTiet = (spClick) => {
    this.setState({
        spChiTiet: spClick
    })
  }
    render() {
        let{hinhAnh,manHinh,heDieuHanh,ram,rom,cameraSau,cameraTruoc} = this.state.spChiTiet;
        return (
            <div className="container text-center">
                <GioHang tangGiamSL={this.tangGiamSL} xoaGioHang={this.xoaGioHang} gioHang={this.state.gioHang}/>
                <h3>Danh Sách Sản Phẩm</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>

                <div className="row mt-5">
                    <div className="col-4">
                        <h3>Iphone 12 Pro Max</h3>
                        <img className="card-img-top" src={hinhAnh} width={150} height ={250}></img>
                    </div>
                    <div className="col-8">
                        <h3>Thông số kĩ thuật</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Màn hình</th>
                                    <th>{manHinh}</th>
                                </tr>
                                <tr>
                                    <th>hệ điều hành</th>
                                    <th>{heDieuHanh}</th>
                                </tr>
                                <tr>
                                    <th>Camera trước</th>
                                    <th>{cameraTruoc}</th>
                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <th>{cameraSau}</th>
                                </tr>
                                <tr>
                                    <th>RAM</th>
                                    <th>{ram}</th>
                                </tr>
                                <tr>
                                    <th>ROM</th>
                                    <th>{rom}</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
