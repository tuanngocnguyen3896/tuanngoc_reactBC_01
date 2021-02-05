import logo from './logo.svg';
import './App.css';
import HeaderFunc from './components/HeaderFunc';
import HeaderClass from './components/HeaderClass';
import BaiTapLayout from './components/BaiTapLayout/BaiTapLayout';
import DataBinding from './DataBinding/DataBinding';
import RenderWithMap from './renderWithMap/RenderWithMap';
import BaiTapRenderMap from './renderWithMap/BaiTapRenderMap';
import DemoProps from './Props/DemoProps';

function App() {
  return (
    <div className="App">
     {/* <BaiTapLayout/> */}
     {/* <DataBinding/> */}
     {/* <RenderWithMap/> */}
     {/* <BaiTapRenderMap/> */}
     <DemoProps/>
    </div>
  );
}

export default App;
