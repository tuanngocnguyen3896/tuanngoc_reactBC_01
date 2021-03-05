import { combineReducers, createStore } from "redux"; //1
import { gioHangReducer } from "./reducers/GioHangReducer";
import {BaiTapGameXucXacReducer} from './reducers/BaiTapXucXacReducer'
import BaiTapOTTReducer from "./reducers/BaiTapOTTReducer";
const rootReducer = combineReducers({
  // state theo từng nghiệp vụ
  // 1
  gioHangReducer, // state giỏ hàng
  //2
  BaiTapGameXucXacReducer,
  //3
  BaiTapOTTReducer: BaiTapOTTReducer
});

export const store = createStore(rootReducer); //1
