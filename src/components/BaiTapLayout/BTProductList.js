import React, { Component } from 'react'
import BTProductItem from './BTProductItem'

export default class BTProductList extends Component {
    render() {
        return (
            <div className="container-fluid bg-dark py-5">
                <h1 className="text-center text-white">BEST SMART PHONE</h1>
                <div className="row">
                    <div className="col-3"> <BTProductItem/></div>
                    <div className="col-3"> <BTProductItem/></div>
                    <div className="col-3"> <BTProductItem/></div>
                    <div className="col-3"> <BTProductItem/></div>
                </div>
            </div>
        )
    }
}
