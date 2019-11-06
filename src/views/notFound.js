import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className='container mt-5'>
      <h1 className='text-center'>404</h1>
      <h4 className='display-2 text-center'>Oop this page does not exist</h4>
      Get back <Link to='/'>HOME</Link>
    </div>
  );
};
