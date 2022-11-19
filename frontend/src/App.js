import './App.css';
import Journal from './components/Journal/Journal';
// import Calendar from './components/Calendar/Calendar';
// import LandingPage from './components/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import { getAllFromTable } from './components/networkRequests';
import React, { useEffect, useState } from 'react'


function App() {
  const [journal, setJournal] = useState([])
  const [profile, setProfile] = useState({id: 1})
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
       <Navbar/>
    <Routes>
        {/* <Route path="/" element = {<LandingPage/>}/> */}
        <Route path="/" element = {<h1>LandingPage</h1>}/>
        <Route path="/journal"  element = {<Journal profile= {profile}/>}/>
        <Route path ="/pie-chart" element ={<h1>Pie Chart</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
