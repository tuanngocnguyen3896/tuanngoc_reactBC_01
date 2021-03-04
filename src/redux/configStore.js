import { combineReducers, createStore } from "redux"; //1
import { gioHangReducer } from "./reducers/GioHangReducer";

const rootReducer = combineReducers({
  // 1
  gioHangReducer: gioHangReducer,
  // state theo từng nghiệp vụ
});

export const store = createStore(rootReducer); //1
