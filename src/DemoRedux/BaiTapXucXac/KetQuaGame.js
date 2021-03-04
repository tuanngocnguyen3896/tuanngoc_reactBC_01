import React, { Component } from 'react'

export default class KetQuaGame extends Component {
    render() {
        return (
            <div className="container text-center mt-5">
                <div className="display-4">
                    Bạn Chọn : <span className="text-success">TÀI</span>
                </div>
                <div className="display-4">
                    Số Bàn Thắng : <span className="text-warning">5</span>
                </div>
                <div className="display-4">
                    Số Bàn Chơi : <span className="text-danger">10</span>
                </div>
                <button className="btn btn-info mt-3">Play Game</button>
            </div>
        )
    }
}
