import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RomanNumerals from './Components/RomanNumerals';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<RomanNumerals />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
