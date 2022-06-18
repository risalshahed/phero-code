import React from 'react';

const Sister = ({ secondGenHouse }) => {
  return (
    <div>
      <h4>Sister</h4>
      House: {secondGenHouse / 3}
    </div>
  );
};

export default Sister;