import React from 'react';
import { useState } from 'react';
import useTShirts from '../../hooks/useTShirts';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
  const [tShirts, setTShirts] = useTShirts();
  const [cart, setCart] = useState([]);

  const handleAddToCart = selectedItem => {
    // console.log(selectedItem);
    // *** 1bar cart a add hye gele r add krbo na! check if the cart is added
    const exists = cart.find(tShirt => tShirt._id === selectedItem._id);
    if(!exists) {
      const newCart = [...cart, selectedItem];
      setCart(newCart);
    }
    else {
      alert('cart already added');
    }

  }

  const handleRemoveFromCart = selectedItem => {
    const restItem = cart.filter(tShirt => tShirt._id !== selectedItem._id);
    setCart(restItem);
  }

  return (
    <div className='home'>
      <div className="tshirt-container">
        {
          tShirts.map(tShirt => (
            <TShirt
              key={tShirt._id}
              tShirt={tShirt}
              handleAddToCart={handleAddToCart}
            />
          ))
        }
      </div>
      <div className="cart-container">
        <Cart
          cart={cart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      </div>
    </div>
  );
};

export default Home;