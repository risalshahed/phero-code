import React from 'react';
import Special from '../Special/Special';

const Myself = ({ secondGenHouse }) => {
  return (
    <div>
      <h4>Myself</h4>
      House: {secondGenHouse / 3}
      <Special />
    </div>
  );
};

export default Myself;