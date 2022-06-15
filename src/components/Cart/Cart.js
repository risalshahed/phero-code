import React from 'react';
import './Cart.css';

// V.V.I. -> Cart Set & Update er kaj Shop.js a krteci; jno ei Child Prop a data pathano jaay; eikhane krle to Parent a pathano jabe na

const Cart = ({cart}) => {
  // console.log(cart);
  let totalPrice = 0;
  let shippingCost = 0;
  let quantity = 0;
  // Array er vitorer Object access krte amra for of nei
  for (const product of cart) {
    quantity += product.quantity;
    totalPrice += product.price * product.quantity;
    shippingCost += product.shipping;
  }

  let tax = totalPrice * 0.1;
  tax = parseFloat(tax.toFixed(2));

  const grandTotal = totalPrice + shippingCost + tax;

  /* for (const product of object) {
    
  } */

  return (
    <div className='cart'>
      <h2>Order Summary</h2>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping Charge: ${shippingCost}</p>
      <p>Tax: ${tax}</p>
      <h5>Grand Total: ${grandTotal}</h5>
    </div>
  );
};

export default Cart;