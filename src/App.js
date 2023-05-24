import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='app'>
    <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/Dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
      </div>  

  );
}

export default App;
