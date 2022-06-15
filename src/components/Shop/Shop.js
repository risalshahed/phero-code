import React, { useState, useEffect } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // see "produtcs.json" in public folder; products is an array, so, initial value of useState is empty array
  useEffect(() => {
    // console.log('products load before fetch')
    // *** directly mention the dataFile "produtcs.json" in fetch as it's inside public folder ***
    fetch('products.json')
    .then(res => res.json())
    .then(data => {
      setProducts(data);
      // console.log('products loaded');
    })
  }, []);

    // *** ei 2ta useEffect asynchronos; uporer product LOAD howar agei nicher useEffect run hye jabe; so dekha jabe nicher useEffect a amra surute product pabo e na, tai ID o pabo na! well, that's a problem!!
    // To solve it, add a ('products') dependency in the following useEffect; tar mane hoilo "products" er value change hoile, useEffect abr call hbe

  useEffect(() => {
    // console.log('Local Storage first line', products);
    // Call getStoredCart function exported from fakedb.js file
    const storedCart = getStoredCart();
    // console.log(storedCart);
    // let's take a new Array so we can insert elements!
    const savedCart = [];
    // Object er property access krbo with for in
    for(const id in storedCart) {
      const addedProduct = products.find(product => product.id === id);
      if(addedProduct) {
        // console.log(addedProduct);
        // *** eigula dlei j quanity add hbe, kivabe bujhbo???
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // new Array nisi, so we can push here
        savedCart.push(addedProduct);
      }      
    }
    
    setCart(savedCart);

    // console.log('Local Storage finished');
  }, [products]);

  // REVISION
  /* useEffect(() => {
    const storedCart = getStoredCart();
    // console.log(storedCart);
    const savedCart = [];
    for(const id in storedCart) {
      const addedProduct = products.find(product => product.id === id);
      if(addedProduct) {
        // console.log(addedProduct);
        const quanity = storedCart[id];
        addedProduct.quanity = quanity;
        savedCart.push(addedProduct);
      }
    }
  }, [products]) */

  // *** jei Component a state thakbe, EventHandler o shei Component a thakbe

  const handleAddToCart = (selectedProduct) => {
    console.log(selectedProduct);
    let newCart = [];
    const exists = cart.find(product => product.id === selectedProduct.id);
    // for selecting a new product
    if(!exists) {
      // 1st select a zero dekhay, but it should be 1
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    }
    // for selecting such a product which already exists
    else {
      const rest = cart.filter(product => product.id !== selectedProduct.id);
      exists.quantity += 1;
      newCart = [...rest, selectedProduct];
    }
    setCart(newCart);
    
    // save data into localStorage
    addToDb(selectedProduct.id);
  }


  return (
    <div className='shop'>
      <div className="products">
        {
          products.map(product => (
            <Product
              key={product.id}
              // send all props i.e. the object
              product={product}
              // send another prop
              handleAddToCart={handleAddToCart}
            />))
        }
      </div>

      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;