import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
  // get the value from the RingContext Provider 
  // const ring = useContext(RingContext);
  const [ornament, currency] = useContext(RingContext);
  return (
    <div>
      <h4>My Precious</h4>
      <p><small>Gift: {ornament}</small></p>
      <p><small>2 {currency}</small></p>
    </div>
  );
};

export default Special;