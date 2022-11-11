import './App.css';
import Journal from './components/Journal/Journal';
// import Calendar from './components/Calendar/Calendar';
// import LandingPage from './components/LandingPage/LandingPage';
import { Routes, Route } from "react-router-dom";
import { getAllFromTable } from './components/networkRequests';
import React, { useEffect, useState } from 'react'


function App() {
  const [journal, setJournal] = useState([])
  const refreshData = ()=> {
    getAllFromTable('journals')
          .then(res => setJournal(res))
  }
  useEffect(() => {
    refreshData()
}, [])
console.log(journal)
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
