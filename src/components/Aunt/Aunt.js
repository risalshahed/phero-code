import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

// const Aunt = ({ house }) => {
const Aunt = () => {
  // consume value from RingContext
  const [house, setHouse] = useContext(RingContext);

  const handleHouseIncrement = () => {
    const newHouse = house + 15;
    setHouse(newHouse);
  }

  return (
    <div>
      <h4>Aunt</h4>
      House: { house / (2+2+1) }
      <br />
      <button onClick={handleHouseIncrement}>Add a House</button>
    </div>
  );
};

export default Aunt;