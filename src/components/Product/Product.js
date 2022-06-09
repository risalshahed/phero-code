import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
  // console.log(props);
  const { handleAddToCart, product } = props;
  const { img, name, price, seller, ratings } = product;

  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p className='product-price'>Price: ${price}</p>
        <div><small>Manufacturer: {seller}</small></div>
        <div><small>Rating: {ratings} star</small></div>
      </div>
      <button onClick={() => handleAddToCart(product)} className='add-cart'>
        <p>Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;