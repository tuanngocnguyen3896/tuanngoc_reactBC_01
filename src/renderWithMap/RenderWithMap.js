import React, { Component } from 'react'

export default class RenderWithMap extends Component {
    
    mangSinhVien = [
        {ma:1,ten:'Nguyen Van A'},
        {ma:2,ten:'Nguyen Van B'},
        {ma:3,ten:'Nguyen Van C'}
    ]

    renderSinhVien = () => {
        // render thẻ đồng cấp : tạo 1 mảng chứa và thẻ phải có key
        // const arrJSX = [];
        // for (let index = 0; index < this.mangSinhVien.length; index++) {
        //     // Mỗi lần duyệt lấy ra 1 đối tượng sinh viên trong mang3 this.mangSinhVien
        //     let tagP = <li key={index}>{this.mangSinhVien[index].ten}</li>
        //     arrJSX.push(tagP);
        // }
        // console.log('arrJSX', arrJSX); // arrJSX [<p key={index}>${this.mangSinhVien[index].ten}</p>,<p key={index}>${this.mangSinhVien[index].ten}</p>,<p key={index}>${this.mangSinhVien[index].ten}</p>]
        // return arrJSX;

        // Cách 2 : thường dùng ***********

        const arrJSX = this.mangSinhVien.map((sinhVien,index) => {
            return <li key={index}>
                {sinhVien.ten}
            </li>
        })

        return arrJSX;
    }

    
    
    
    render() {
        return (
                // [<p key ={1}>Hello Si</p>, 
                // <p key={2}>Hello Phu</p>]
            // this.renderSinhVien()
            <div className="container">
                <ul>
                    {this.renderSinhVien()}
                </ul>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã SV</th>
                            <th>Tên SV</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mangSinhVien.map((sinhVien,index) => {
                            return <tr key={index}>
                                <td>{sinhVien.ma}</td>
                                <td>{sinhVien.ten}</td>
                                <td><button className="btn btn-danger">Xóa</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
