import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './Components/Menu';
import Franchise from './Components/Franchise';



function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/about" element = {<About/>} />
          <Route path="/menu" element = {<Menu/>} />
          <Route path="/franchise" element = {<Franchise/>} />
        </Routes>
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
