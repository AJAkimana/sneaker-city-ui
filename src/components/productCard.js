import React from 'react';
import { Link } from 'react-router-dom';

export const defaultImage =
  'https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png';
export const ProductCard = ({ name, model, price, picture, productId }) => {
  return (
    <div className='col-sm-8 col-md-6 col-lg-4 mt-2'>
      <div className='card'>
        <img className='card-img' src={defaultImage} alt='Vans' />
        <div className='card-body'>
          <h4 className='card-title'>{name}</h4>
          <h6 className='card-subtitle mb-2 text-muted'>Model: {model}</h6>
          <div className='buy d-flex justify-content-between align-items-center'>
            <div className='price text-success'>
              <h5 className='mt-4'>RwF{price}</h5>
            </div>
          </div>
          <Link to={`/products/${productId}`} className='btn btn-info'>
            <i className='fas fa-shopping-cart'></i> View{' '}
            <strong>{name.toUpperCase()}</strong> details
          </Link>
        </div>
      </div>
    </div>
  );
};
