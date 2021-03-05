import React, { Component } from 'react'
import {connect} from 'react-redux';
class KetQuaGame extends Component {
    render() {
        return (
            <div className="container text-center mt-5">
                <div className="display-4">
                    Bạn Chọn : <span className="text-success">{this.props.stateGame.taiXiu ? 'TÀI' : 'XỈU'}</span>
                </div>
                <div className="display-4">
                    Số Bàn Thắng : <span className="text-warning">{this.props.stateGame.soBanThang}</span>
                </div>
                <div className="display-4">
                    Số Bàn Chơi : <span className="text-danger">{this.props.stateGame.tongSoBanChoi}</span>
                </div>
                <button onClick={() => {this.props.playGame()}} className="btn btn-info mt-3">Play Game</button>
            </div>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        // taiXiu:state.BaiTapGameXucXacReducer.taiXiu,
        // soBanThang:state.BaiTapGameXucXacReducer.soBanThang,        => dùng state
        // tongSoBanChoi:state.BaiTapGameXucXacReducer.tongSoBanChoi,
        stateGame: rootReducer.BaiTapGameXucXacReducer       // => lấy cả stateDefault
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            dispatch({
                type: 'PLAY_GAME'
            })
        }
    }
}


export default connect (mapStateToProps,mapDispatchToProps)(KetQuaGame)