import React, { useState } from 'react'

export default function ParkingForm() {
  const [parkingSpotError, setParkingSpotError] = useState('');

  const validation = e => {
    e.preventDefault();
    setParkingSpotError("Please enter a parking spot number");
    console.log("meow");
  }

  return (
    <div>
      <form className="space-y-2 p-3 bg-white shadow-lg box-border w-3/4 border-4 rounded">
        <div>
          <label htmlFor="parking-spot" className="block font-semibold">Parking spot number</label>
          <input required type="text" placeholder="C0-1" className="outline-none focus:shadow-outline border w-3/4 shadow-md"/>
          <p className="text-red-400 text-sm">{parkingSpotError}</p>
        </div>
        <div>
        <label htmlFor="parking-spot" className="block font-semibold">License plate number</label>
        <input type="text" placeholder="N393N" className=" outline-none focus:shadow-outline border w-3/4 shadow-md"/>
        </div>
        <div>
          <label htmlFor="parking-spot" className="block font-semibold">Expiry time</label>
          <input type="time" className="outline-none focus:shadow-outline border w-3/4 shadow-md"/>
        </div>
        <input type="submit" className="block font-semibold hover:bg-blue-400 rounded border py-2 px-8 shadow-md" onClick={e => validation(e)}/>
      </form>
    </div>
  )
}
