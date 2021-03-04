import React, { Component } from 'react'
// kết nối react component với redux store
import {connect} from 'react-redux' // 1

class GioHangRedux extends Component {
    render() {
        // console.log(this.props.gioHang,"Giỏ hàng")
        return (
            <div className="container">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <td>Mã SP</td>
                            <td>Tên SP</td>
                            <td>Hình Ảnh</td>
                            <td>
                                Số Lượng
                                </td>
                            <td>Giá</td>
                            <td>Thành Tiền</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.gioHang.map((spGH,index) => {
                            return <tr key={index}>
                            <td>{spGH.maSP}</td>
                            <td>{spGH.tenSP}</td>
                            <td><img width={50} height={50} src={spGH.hinhAnh}></img></td>
                            <td>
                            <button disabled={!spGH.soLuong} className="btn btn-danger" onClick={() => {this.props.tangGiamSL(spGH.maSP,-1)}}>-</button>
                                {spGH.soLuong}
                            <button className="btn btn-success" onClick={() => {this.props.tangGiamSL(spGH.maSP,1)}}>+</button>
                                </td>
                            <td>{spGH.giaBan}</td>
                            <td>{(spGH.soLuong*spGH.giaBan).toLocaleString()}</td>
                            <td><button onClick={() =>{this.props.xoaGioHang(index)}} className="btn btn-danger">Xóa</button></td>
                        </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
// Hàm chuyển state trên redux thành props của component
// state đại diện cho rootReducer
const mapStateToProps = (state) => { // 3
    return {
        gioHang:state.gioHangReducer.gioHang
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (index) => {
            const action = {
              type: 'XOA_GIO_HANG', // thuộc tính bắt buộc
              index
            }
            // console.log(action);
            // dùng dispatch đưa dl lên redux store
            dispatch(action);
        },
        tangGiamSL: (maSP,soLuong) => {
            const action = {
                type: 'THAY_DOI_SL',
                maSP,
                soLuong
            }
            // console.log(action);
            dispatch(action);
        }
    }
}

// Kết nối giữa component và redux
export default connect(mapStateToProps,mapDispatchToProps)(GioHangRedux) // 2