import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home.jsx'
import './styles/styles.css';

function App() {
  return (
    <Router>
      <div id="app">
        <Home />
      </div>
    </Router>
  )
}

export default App;
