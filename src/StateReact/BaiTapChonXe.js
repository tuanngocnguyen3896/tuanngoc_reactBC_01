import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    
    state = {
        imgSrc: './img/car/products/black-car.jpg'
    };
    
    changeColor = (color) => {
        // Thay đổi giá trị dựa vào biến màu 
        this.setState({
            imgSrc : `./img/car/products/${color}-car.jpg`
        })
        // Hàm setState thay đổi biến this.state.imgSrc => Đồng thời gọi render lại giao diện
    };
    
    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-6">
                        <img className="w-100" src={this.state.imgSrc} />
                    </div>
                    <div className="col-6 text-center">
                        <p>Change Color</p>
                        <div className="row">
                            <div className="col-4">
                                <button onClick={(event)=>{
                                    this.changeColor('red')
                                }} className="btn btn-danger">Red Car</button>
                            </div>
                            <div className="col-4">
                                <button onClick={(event)=>{
                                    this.changeColor('silver')
                                }} className="btn btn-light">Siler Car</button>
                            </div>
                            <div className="col-4">
                                <button onClick={(event)=>{
                                    this.changeColor('black')
                                }} className="btn btn-primary">Black Car</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
