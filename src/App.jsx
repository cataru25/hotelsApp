import React, { useState } from 'react';
import HotelCard from './components/hotelCard/HotelCard';
import './App.css';
import { hotelsData } from './DB/data';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <section>
        {
          hotelsData && hotelsData.map((h, index) => {
            return (
              <HotelCard name={h.name}
              availabilityFrom={h.availabilityFrom}              
              availabilityTo={h.availabilityTo}              
              description={h.description}              
              city={h.city}              
              country={h.country}              
              rooms={h.rooms}              
              price={h.price}
              key={index}              
              />
            );
          })
        }
        {/* <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p> */}
      </section>
    </div>
  )
}

export default App
