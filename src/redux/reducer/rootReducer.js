import { combineReducers } from "redux";
import { gioHangReducer } from "./gioHangReducer";
import BaiTapGameXucXacReducer from "./BaiTapXucXacReducer";

// store tổng
const rootReducer = combineReducers({
  // Nơi chứa reducer cho nghiệp vụ ( store con)
  gioHangReducer: gioHangReducer,
  BaiTapGameXucXacReducer,
});

export default rootReducer;
