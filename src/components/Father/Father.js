import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = ({ house }) => {
  let secondGenHouse = house / (2+2+1) * 2;
  return (
    <div>
      <h4>Father</h4>
      House: { 
        house / (2+2+1) * 2
      }
      
      <div style={{display: 'flex'}}>
        <Myself secondGenHouse={secondGenHouse} />
        <Brother secondGenHouse={secondGenHouse} />
        <Sister secondGenHouse={secondGenHouse} />
      </div>

    </div>
  );
};

export default Father;