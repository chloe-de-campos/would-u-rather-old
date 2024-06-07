// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game from './components/Game';
import Statistics from './components/Statistics';
import './App.css';
import initialQuestions from './data/initialQuestions.json'; 
import Logo from './components/Logo'

function App() {

  return (
    <Router>
      <div className="App">
        <header>
          
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Game questions={initialQuestions} />} />
            <Route path="/stats" element={<Statistics questions={initialQuestions} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
