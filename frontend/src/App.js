import React from 'react'
// import logo from './logo.svg';
// import { Calendar } from './components/Calendar/CalendarFunction';
import './App.css';
import PieChart from './components/PieChart/PieChart.js'
// import JournalList from './components/PieChart/Journalresults';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <PieChart/>
        {/* <JournalList/> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
