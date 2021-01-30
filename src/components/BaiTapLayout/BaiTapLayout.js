import React, { Component } from 'react'
import BTHeader from './BTHeader'
import BTLaptop from './BTLaptop'
import BTProductList from './BTProductList'
import BTPromotion from './BTPromotion'
import BTSlider from './BTSlider'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <BTHeader/>
                <BTSlider/>
                <BTProductList/>
                <BTLaptop/>
                <BTPromotion/>
            </div>
        )
    }
}
