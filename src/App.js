import logo from "./logo.svg";
import "./App.css";
import ExComponents from "./components/assigment/ExComponents";
import SinhVien from "./components/DataBinding/SinhVien";
import Event from "./components/DataBinding/Event";
import DemoIf from "./components/CauTrucDieuKien_Rerender/DemoIf";
import ExState from "./components/CauTrucDieuKien_Rerender/ExState";
import DemoCircle from "./components/CircleStructure/DemoCircle";
import Loop from "./components/assignment2/Loop";
import DemoProps from "./components/Props/DemoProps";
import BaiTapTruyenFunction from "./components/Props/BaiTapTruyenFunction/BaiTapTruyenFunction";
import BaiTapGioHang from "./components/Props/BaiTapGioHang/BaiTapGioHang";
import BTGioHangRedux from "./components/BaiTapRedux/BaiTapGioHang/BTGioHangRedux";
import BaiTapGameXucXac from "./components/BaiTapRedux/BaiTapGameXucXac/BaiTapGameXucXac";

function App() {
  return (
    <div className="container-fluid">
      {/* <ExComponents /> */}
      {/* <SinhVien /> */}
      {/* <Event /> */}
      {/* <DemoIf /> */}
      {/* <ExState /> */}
      {/* <DemoCircle /> */}
      {/* <Loop /> */}
      {/* <DemoProps title={"CyberSoft"} /> */}
      {/* <BaiTapTruyenFunction /> */}
      {/* <BaiTapGioHang /> */}
      {/* <BTGioHangRedux /> */}
      <BaiTapGameXucXac />
    </div>
  );
}

export default App;
