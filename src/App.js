import logo from './logo.svg';
import './App.css';
import HeaderFunc from './components/HeaderFunc';
import HeaderClass from './components/HeaderClass';
import BaiTapLayout from './components/BaiTapLayout/BaiTapLayout';
import DataBinding from './DataBinding/DataBinding';
import RenderWithMap from './renderWithMap/RenderWithMap';
import BaiTapRenderMap from './renderWithMap/BaiTapRenderMap';
import DemoProps from './Props/DemoProps';
import DemoQLSP from './Props/DemoQLSP/DemoQLSP';
import BTGioHangRedux from './DemoRedux/BaiTapGioHangRedux/BTGioHangRedux';
import BTGameXX from './DemoRedux/BaiTapXucXac/BTGameXX'
import BaiTapOanTuTi from './DemoRedux/BaiTapOanTuTi/BaiTapOanTuTi';
function App() {
  return (
    <div className="App">
     {/* <BaiTapLayout/> */}
     {/* <DataBinding/> */}
     {/* <RenderWithMap/> */}
     {/* <BaiTapRenderMap/> */}
     {/* <DemoProps/> */}
     {/* <DemoQLSP/> */}
     {/* <BTGioHangRedux></BTGioHangRedux> */}
     <BTGameXX/>
     {/* <BaiTapOanTuTi/> */}
    </div>
  );
}

export default App;
