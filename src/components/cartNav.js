import React from 'react';
import { Link } from 'react-router-dom';

export const CartNav = ({ totalItems, title }) => {
  return (
    <nav className='navbar navbar-light bg-light mt-5'>
      <Link to='/my-cart' className='btn btn-primary'>
        My cart <span className='badge badge-light'>{totalItems}</span>
        <span className='sr-only'>total items</span>
      </Link>
      <h4 className='text-center'>{title}</h4>
    </nav>
  );
};
