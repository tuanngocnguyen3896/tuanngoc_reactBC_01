import React, { Component } from 'react'
import {connect} from 'react-redux';
 class Player extends Component {
    render() {
        return (
            <div className="playerGame text-center">
                <div className="think">
                    <img className="mt-5" width={100} height={100} src={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh} alt={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh} />
                </div>
                <div className="speech-bubble"></div>
                <img style={{width:250,height:250}} src="./img/oantuti/player.png"></img>
                <div className="row">
                    {this.props.mangDatCuoc.map((item,index) => {
                        let border = {};
                        if(item.datCuoc){
                            border = {border:'3px solid red'}
                        }

                        return <div key={index} className="col-4">
                        <button onClick={() => {this.props.datCuoc(item.ma)}} style={border} className="btnItem">
                            <img width={50} height={50} src={item.hinhAnh} alt={item.hinhAnh} />
                        </button>
                    </div>
                    })}
                    
                  
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        mangDatCuoc: state.BaiTapOTTReducer.mangDatCuoc
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (maCuoc) => {
            dispatch({
                type:'CHON_KEO_BUA_BAO',
                maCuoc
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player);