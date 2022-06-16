import React from 'react';
import { CardGroup } from 'react-bootstrap';
import CardReactBootStrap from '../CardReactBootStrap/CardReactBootStrap';

const CardGroupReactBootStrap = () => {
  const products = [
    { id: 1, name: 'PC pro', price: 30000 },
    { id: 2, name: 'PC cro', price: 25000 },
    { id: 3, name: 'PC gro', price: 20000 }
  ]
  return (
    <div>
      <CardGroup>
        {
          products.map(product => (
            <CardReactBootStrap
              key={product.id}
              product={product}
            />
          ))
        }
      </CardGroup>
    </div>
  );
};

export default CardGroupReactBootStrap;