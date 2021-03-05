import React, { Component } from 'react'
import './BaiTapOanTuTi.css'
import Computer from './Computer'
import KetQuaGame from './KetQuaGame'
import Player from './Player'
import {connect} from 'react-redux';
class BaiTapOanTuTi extends Component {
    render() {
        
        return (
            <div className="gameOTT">
               
                <div className="row text-center mt-5">
                    <div className="col-4">
                        <Player/>
                    </div>
                    <div className="col-4">
                        <KetQuaGame/>
                        <button onClick={() => {this.props.playGame()}} className="btn btn-success">Play Game</button>
                    </div>
                    <div className="col-4">
                        <Computer/>
                    </div>
                </div> 
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            let count = 0;
            // Hàm lặp
            let randomComputerItem = setInterval(() => {
                dispatch({
                    type: 'RAN_DOM'
                })
                count++;
                if(count > 10){
                    // dừng hàm setInterval
                    clearInterval(randomComputerItem)
                    dispatch({
                        type: 'END_GAME',
                    })
                }
            },100)
        }
    }
}

export default connect (null,mapDispatchToProps)(BaiTapOanTuTi);