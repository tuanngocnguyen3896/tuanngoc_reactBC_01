import React, { Component } from 'react'
import ThongTinSinhVien from './ThongTinSinhVien'

export default class DemoProps extends Component {
    mangSinhVien = [
        {ma:'sv01',ten:'Nguyen Van A',tuoi:18},
        {ma:'sv02',ten:'Nguyen Van B',tuoi:20},
        {ma:'sv03',ten:'Nguyen Van C',tuoi:33}
    ]
    
    renderSinhVien = () => {
        const result = this.mangSinhVien.map((sv,index) => {
            return <div key={index} className="col-4">
                <ThongTinSinhVien sinhVien = {sv} />
            </div>
        });
        return result;
    }

    render() {
        // this.props
        
        return (
            <div className=" container">
                <h3 className="text-center display-4">Thông Tin Sinh Viên</h3>
                <div className="row">
                    <div className="col-4">
                        <ThongTinSinhVien sinhVien={this.mangSinhVien[0]} />
                    </div>
                    <div className="col-4">
                        <ThongTinSinhVien sinhVien={this.mangSinhVien[1]} />
                    </div>
                    <div className="col-4">
                        {/* <ThongTinSinhVien maSV={this.mangSinhVien[2].ma} tenSV={this.mangSinhVien[2].ten} tuoiSV={this.mangSinhVien[2].tuoi}/> */}
                        <ThongTinSinhVien bgColor="red"/>
                    </div>
                    {this.renderSinhVien()}
                </div>
            </div>
        )
    }
}
