import React from 'react';
import { Link } from 'react-router-dom';

export const ProductCard = ({ name, model, price, picture }) => {
  const image =
    'https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png';
  return (
    <div className='col-12 col-sm-8 col-md-6 col-lg-4'>
      <div className='card'>
        <img className='card-img' src={image} alt='Vans' />
        <div className='card-img-overlay d-flex justify-content-end'>
          <Link to='#' className='card-link text-danger like'>
            <i className='fas fa-heart'></i>
          </Link>
        </div>
        <div className='card-body'>
          <h4 className='card-title'>{name}</h4>
          <h6 className='card-subtitle mb-2 text-muted'>Model: {model}</h6>
          <div className='buy d-flex justify-content-between align-items-center'>
            <div className='price text-success'>
              <h5 className='mt-4'>${price}</h5>
            </div>
            <Link to='#' className='btn btn-danger mt-3'>
              <i className='fas fa-shopping-cart'></i> Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
