import React, { useState, useEffect } from 'react';

const CountUpdater = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        // Make a request to your local API (change the URL accordingly)
        const response = await fetch('http://127.0.0.1:5000/get_vehicle_count');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        // Assuming your API responds with a JSON object containing the count
        const newCount = data.vehicle_count;
        
        // Update the state with the new count
        setCount(newCount);
      } catch (error) {
        console.error('Error fetching count:', error);
      }
    };

    // Fetch data initially
    fetchCount();

    // Set up an interval to fetch data every 1 second
    const intervalId = setInterval(fetchCount, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <h1 className='desc text-center mb-10'>Count: {count}</h1>
    </div>
  );
};

export default CountUpdater;
