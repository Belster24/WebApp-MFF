import React, { useState } from "react";
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';

function App() {

  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  function decrementCounter() {
    setCounter(counter - 1);
  }

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/" className="active">Home/Increase</Link></li>
          <li><Link to="/about" className="active">About/Decrease</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage counter={counter} onIncrement={incrementCounter} />} />
        <Route path="/about" element={<About counter={counter} onDecrement={decrementCounter} />} />
      </Routes>
    </>
  );
}

export default App;
