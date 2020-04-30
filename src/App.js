import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Parking app with Dan!!!</h1>
      <form>
        <label for="parking-spot">Parking spot number</label>
        <input type="text" placeholder="C0-1" />
        <label for="parking-spot">License plate number</label>
        <input type="text" placeholder="N393N" />
        <label for="parking-spot">Expiry time</label>
        <input type="time" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
