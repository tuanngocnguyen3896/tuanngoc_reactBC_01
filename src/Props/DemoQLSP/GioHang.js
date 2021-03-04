import React, { Component } from 'react'

export default class GioHang extends Component {
    render() {
        let {gioHang,xoaGioHang,tangGiamSL} = this.props;
        return (
            <div className="container">
                <h2 className="text-center text-info">Giỏ hàng</h2>
                <div style={{cursor:'pointer'}} className="text-right text-danger">
                    <i style={{fontSize: 30}} className="fa fa-cart-plus">({gioHang.reduce((tsl,spGH,index)=>{
                        return tsl += spGH.soLuong;
                    },0)})</i>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Mã SP</td>
                            <td>Tên SP</td>
                            <td>Hình Ảnh</td>
                            <td>Giá SP</td>
                            <td>Số Lượng</td>
                            <td>Thành Tiền</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                       {gioHang.map((spGH,index) => {
                           return ( <tr key={index}>
                               <td>{spGH.maSP}</td>
                               <td>{spGH.tenSP}</td>
                               <td><img width={50} height={50} src={spGH.hinhAnh}></img></td>
                               <td>{(spGH.gia).toLocaleString()}</td>
                               <td>
                                    <button onClick={()=>tangGiamSL(spGH.maSP,false)} className="btn btn-danger mr-2">-</button>
                                   {spGH.soLuong}
                                   <button onClick={()=>tangGiamSL(spGH.maSP,true)} className="btn btn-danger ml-2">+</button>
                                </td>
                               <td>{(spGH.gia*spGH.soLuong).toLocaleString()}</td>
                               <td>
                                <button onClick={()=>xoaGioHang(spGH.maSP)} className="btn btn-danger">Xóa</button>
                               </td>
                           </tr>
                           )
                       })}
                    </tbody>
                    <tfoot>
                        <td colSpan="5"></td>
                        <td>Tổng cộng</td>
                        <td>{gioHang.reduce((tongTien,spGH,index)=> {
                            return (tongTien += spGH.soLuong* spGH.gia).toLocaleString();
                        },0)}</td>
                    </tfoot>
                </table>
            </div>
        )
    }

    // tinhTongTien = () => {
    //     let tongTien= this.props.gioHang.reduce((tongTien,spGH,index) =>{
    //         tongTien += spGH.soLuong*spGH.gia;
    //         return tongTien;
    //     },0)
    //     return tongTien;
    // }
}
