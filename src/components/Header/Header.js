import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/orderreview'>Order Review</Link>
        <Link to='/grandpa'>Grandpa</Link>
      </nav>
    </div>
  );
};

export default Header;