import {Routes, Route} from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Journal from './components/Journal/Journal';

function App() {
  return (
    <div className="App">
            <LandingPage/>
      {/* <Routes>
          <Route/>

      </Routes> */}
    <Journal/>
    </div>
  );
}

export default App;
