"use client"
import React, { useState, useEffect } from 'react';
import PlaceCard from '@components/PlaceCard'; 
import res from '@utils/extras'

const Feed = (props) => {
  const latitude = props.latitude;
  const longitude = props.longitude;
console.log(props)
  
  // Define state variables
  const [placesData, setPlacesData] = useState([res]);

  return (
    <section className='feed'>
      {placesData.map((place) => (
        <PlaceCard key={place["place_id"]} name={place["name"]} location={place["location"]} />
      ))}
    </section>
  );
};

export default Feed;
