import React from 'react';

const Uncle = ({ house }) => {
  return (
    <div>
      <h4>Uncle</h4>
      House: { house / (2+2+1) * 2 }
    </div>
  );
};

export default Uncle;