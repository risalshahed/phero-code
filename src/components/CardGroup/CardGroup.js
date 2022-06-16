import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
  const products = [
    { id: 1, name: 'PC pro', price: 30000 },
    { id: 2, name: 'PC cro', price: 25000 },
    { id: 3, name: 'PC gro', price: 20000 }
  ]
  return (
    <div>
      <h2>
        This is my cards
      </h2>

      <div className="card-group">
        {
          products.map(product => (
            <Card
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </div>
  );
};

export default CardGroup;