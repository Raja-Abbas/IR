import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Signup from './components/onboarding';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/onboarding" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
