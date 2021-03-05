import React, { Component } from 'react'
import {connect} from 'react-redux';
class XucXac extends Component {
    renderXucXac = () => {
        return this.props.mangXucXac.map((xx,index) => {
            return <img key={index} className="m-1" src={xx.hinhAnh} alt={xx.hinhAnh} width={50}/>
        })
    }
    
    render() {
        return (
            <div className="container mt-5">
                <div className="row text-center">
                    <div className="col-4">
                        <button onClick={() => {
                            this.props.datCuoc(true)
                        }} style={{border: '3px solid green', outline:'none', fontSize: 50}} className="bg-danger">
                            <div className="p-5 bg-danger text-white w-100 h-100">
                                TÀI
                            </div>
                        </button>
                    </div>
                    <div className="col-4">
                        {this.renderXucXac()}
                    </div>
                    <div className="col-4">
                        <button onClick={() => {
                            this.props.datCuoc(false)
                        }} style={{border: '3px solid green', outline:'none', fontSize: 50}} className="bg-dark">
                            <div className="p-5 bg-dark text-white w-100 h-100">
                                XỈU
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        mangXucXac: state.BaiTapGameXucXacReducer.mangXucXac
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (taiXiu) => {
            let action = {
                type: 'DAT_CUOC',
                taiXiu
            }
            // console.log(action)
            dispatch(action);
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(XucXac)