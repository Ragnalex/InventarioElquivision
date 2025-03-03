import logo from './logo.svg';
import './App.css';
import TopHeader from './Components/Header/TopHeader';
import { BrowserRouter as Router, Routes, Route, useMatch, BrowserRouter } from "react-router-dom";

//Routes
import Main from './Path/Main';
import Insumos from './Path/Insumos/Insumos';
import Lentes from './Path/Lentes/lentes';

function App() {
  return (
    <div className="App">
      <div  className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={ <Main/> }> </Route>
            <Route path="/Insumos" element= { <Insumos/> }> </Route>
            <Route path='/Lentes' element= { <Lentes/> }></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
