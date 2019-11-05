import React from 'react';
import { defaultImage } from './productCard';

export const CartIem = ({
  name,
  price,
  description,
  model,
  size,
  onSelectItem
}) => {
  return (
    <div className='row no-gutters'>
      <div className='col-md-1'>
        <label class='checkbox-inline'>
          <input
            type='checkbox'
            value=''
            className='form-control'
            onClick={onSelectItem}
          />
          {name}
        </label>
      </div>
      <div className='col-md-3'>
        <img className='card-img' src={defaultImage} alt='Vans' />
        <div className='card-img-overlay d-flex justify-content-end'>
          <a href='#' className='card-link text-danger like'>
            <i className='fas fa-heart'></i>
          </a>
        </div>
      </div>
      <div className='col-md-8'>
        <div className='card-body'>
          <h4 className='card-title'>{name}</h4>
          <h6 className='card-subtitle mb-2 text-muted'>Model: {model}</h6>
          <p className='card-text'>{description}</p>
          <div className='options d-flex flex-fill'></div>
          <div className='row'>
            <div className='col-md-12'></div>
            <div
              className='btn-group col-4 mt-2'
              role='group'
              aria-label='Basic example'
            >
              <button type='button' className='btn btn-secondary'>
                Size:
              </button>
              <button type='button' className='btn btn-secondary'>
                {size}
              </button>
            </div>
          </div>
          <div className='buy d-flex justify-content-between align-items-center'>
            <div className='price text-success'>
              <h5 className='mt-4'>RwF{price}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
