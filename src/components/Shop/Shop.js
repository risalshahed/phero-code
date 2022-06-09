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
    console.log('products load before fetch')
    // directly mention the dataFile "produtcs.json" in fetch as it's inside public folder
    fetch('products.json')
    .then(res => res.json())
    .then(data => {
      setProducts(data);
      console.log('products loaded');
    })
  }, []);

    // *** ei 2ta useEffect asynchronos; uporer product LOAD howar agei nicher useEffect run hye jabe; so dekha jabe nicher useEffect a amra surute product pabo e na, tai ID o pabo na! well, that's a problem!!
    // To solve it, add a ('products') dependency in the following useEffect; tar mane hoilo "products" er value change hoile, useEffect abr call hbe

  useEffect(() => {
    console.log('Local Storage first line', products);
    // Call getStoredCart function exported from fakedb.js file
    const storedCart = getStoredCart();
    // console.log(storedCart);
    // Object er property access krbo with for in
    for(const id in storedCart) {
      const addedProduct = products.find(product => product.id === id);
      if(addedProduct) {
        // eigula dlei j quanity add hbe, kivabe bujhbo???
        // Module 48 theke i mean ei project er sbkisu REVISION dle valo hoy; eita Module 49.6 er 10/11 minute prjnto
        /* const quantity = storedCart[id];
        addedProduct.quantity = quantity; */
        console.log(addedProduct);  
      }
      
    }
    console.log('Local Storage finished');
  }, [products])

  // *** jei Component a state thakbe, EventHandler o shei Component a thakbe

  const handleAddToCart = (product) => {
    // console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
    // save data into localStorage
    addToDb(product.id);
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