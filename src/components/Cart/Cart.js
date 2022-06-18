import React from 'react';
import './Cart.css';

const Cart = (props) => {
  // console.log(props.cart[0]._id);
  const { cart, handleRemoveFromCart } = props;
  // console.log(cart[0]._id);

  // Conditional rendering options (4 ways)
  // Element variable; Ternary operator; && operator (shorthand); || operator
  // 1. Element variable
  let command;
  if(cart.length === 0) {
    command = <div>
      <h5>Please add at least one item</h5>
      <p>Nothing here niggas, boy now!</p>
    </div>
  }
  else if(cart.length === 1) {
    command = <p>Please add more...</p>
  }
  else {
    command = <p><small>Thanks for adding items</small></p>
  }

  return (
    <div className='cart'>
      <h2>{cart.length} items selected</h2>
      
      {
        cart.map(tShirt => <p>
          {tShirt.name}
          <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
          </p>
        )
      }
      {command}
      {/* 2. Ternary operator */}
      {
        cart.length < 4 ? <p>Keep Adding</p> : <button>Remove All</button>
      }
      {/* 3. && Operator (Shorthand), only render if condition is true */}
      {
        cart.length > 4 && <button>Review Order</button>
      }
      {/* 4. || Operator (only render if condition is false) */}
      {
        cart.length === 0 || <p className="orange">Yay you're buying</p>
      }
    </div>
  );
};

export default Cart;