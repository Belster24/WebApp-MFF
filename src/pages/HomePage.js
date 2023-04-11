import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function HomePage({ counter, onIncrement }) {
    const [inputValue, setInputValue] = useState('');

    const handleButtonClick = () => {
      setInputValue('');
    };
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  return (
    <div className="something">
        
      <h1>Home Page</h1>
         <label htmlFor="input-field">Type something:</label>
      <input
        type="text"
        id="input-field"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className='btn btn-primary' onClick={handleButtonClick}>Clear</button>
      <br />
      <label htmlFor="output-label">You typed:</label>
      <label id="output-label">{inputValue}</label>
      <br />
      <br />
      <p>Counter value: {counter}</p>
      <button className='btn btn-success' onClick={onIncrement}>Increment</button>
      
    </div>
  );
}

export default HomePage;
