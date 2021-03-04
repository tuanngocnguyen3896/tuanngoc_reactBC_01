import React, { Component } from 'react'

export default class XucXac extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row text-center">
                    <div className="col-4">
                        <button style={{border: '3px solid green', outline:'none', fontSize: 50}} className="bg-danger">
                            <div className="p-5 bg-danger text-white w-100 h-100">
                                TÀI
                            </div>
                        </button>
                    </div>
                    <div className="col-4">
                        <img className="m-1" src='./img/1.png' width={50}/>
                        <img className="m-1" src='./img/2.png' width={50}/>
                        <img className="m-1" src='./img/3.png' width={50}/>
                    </div>
                    <div className="col-4">
                        <button style={{border: '3px solid green', outline:'none', fontSize: 50}} className="bg-dark">
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
