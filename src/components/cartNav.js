import React from 'react';
import { Link } from 'react-router-dom';

export const CartNav = ({ totalItems }) => {
  return (
    <nav className='navbar navbar-light bg-light'>
      <button type='button' className='btn btn-primary'>
        My cart <span className='badge badge-light'>{totalItems}</span>
        <span className='sr-only'>total items</span>
      </button>
    </nav>
  );
};
