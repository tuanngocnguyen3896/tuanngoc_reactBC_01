import React, { Component } from 'react'
import {connect} from 'react-redux' // 1
 class SanPhamRedux extends Component {
    render() {
        const {sanPham,xemCT,themGioHang} = this.props;
        return (
      <div className="card text-white bg-dark">
        <img width={100} height={300} className="card-img-top" src={sanPham.hinhAnh} alt={sanPham.hinhAnh} />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.giaBan}</p>
          <button onClick={()=>themGioHang(sanPham)} className="btn btn-danger ml-2">Thêm Giỏ Hàng</button>
        </div>
      </div>
    );
    }
}
// Hàm dùng để lấy state từ redux về tạo thành props của component
const mapStateToProps = () => {
  return {

  }
}
// Hàm dùng để tạo ra props là hàm xử lý sự kiện để đưa dl lên redux
const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanPham) => {
      // const sanPhamGH = {
      //   maSP:sanPham.maSP,
      //   tenSP:sanPham.tenSP, 
      //   gia: sanPham.giaBan,
      //   hinhAnh: sanPham.hinhAnh,
      //   soLuong:1
      // }   => cũ
      const spGioHang = {
        ...sanPham,
        soLuong:1
      }
      const action = {
        type: 'THEM_GIO_HANG', // thuộc tính bắt buộc
        spGioHang : spGioHang
      }
      console.log(action);
      // dùng dispatch đưa dl lên redux store
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SanPhamRedux)