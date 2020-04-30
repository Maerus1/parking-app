import React from 'react';
import './main.css';
import ParkingForm from './components/ParkingForm';

function App() {
  return (
    <div className="pl-4 pt-2 space-y-4">
      <h1 className="text-2xl">Parking app with Dan!!!</h1>
      <p>Let us help make your life easier</p>
      <p>Please enter your parking spot number, license plate number, and the time you want to leave</p>
      <ParkingForm />
    </div>
  );
}

export default App;
