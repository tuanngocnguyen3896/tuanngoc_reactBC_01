import React, { Component } from "react";
import { connect } from "react-redux";
class KetQuaGame extends Component {
  render() {
    return (
      <div>
        <div className="display-5 text-warning">{this.props.ketQua}</div>
        <div className="display-5 text-success">
          Số bàn thắng: <span className="text-warning">{this.props.soBanThang}</span>
        </div>
        <div className="display-5 text-success">
          Tổng số bàn chơi: <span className="text-warning">{this.props.soBanChoi}</span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ketQua: state.BaiTapOTTReducer.ketQua,
    soBanThang: state.BaiTapOTTReducer.soBanThang,
    soBanChoi: state.BaiTapOTTReducer.soBanChoi,
  };
};

export default connect(mapStateToProps)(KetQuaGame);
