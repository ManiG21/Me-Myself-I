import './App.css';
import Journal from './components/Journal/Journal';
// import Calendar from './components/Calendar/Calendar';
// import LandingPage from './components/LandingPage/LandingPage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Journal/>
    {/* <Routes>
        <Route path="/" element = {<LandingPage}/>}/>
        <Route path="/journal" element = {<Journal/>}/>
        <Route path ="/calendar" element ={<Calendar/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
