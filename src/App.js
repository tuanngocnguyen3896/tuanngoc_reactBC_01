import logo from './logo.svg';
import './App.css';
import HeaderFunc from './components/HeaderFunc';
import HeaderClass from './components/HeaderClass';
import BaiTapLayout from './components/BaiTapLayout/BaiTapLayout';
import DataBinding from './DataBinding/DataBinding';

function App() {
  return (
    <div className="App">
     {/* <BaiTapLayout/> */}
     <DataBinding/>
    </div>
  );
}

export default App;
