import React from 'react';
import { Link } from 'react-router-dom';

export const UserModal = ({ modalRef, onCloseModel, user, inputChange }) => {
  return (
    <div className='modal fade' ref={modalRef} id='user_Modal'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <button className='close' type='button' data-dismiss='modal'>
              ×
            </button>
            <h4 className='modal-title'>Provide your information</h4>
          </div>
          <div className='modal-body'>
            <div className='form-group has-feedback'>
              <input
                className='form-control'
                type='text'
                name='names'
                onChange={inputChange}
                value={user.names}
                placeholder='Your Names'
              />
            </div>
            <div className='form-group has-feedback'>
              <input
                className='form-control'
                type='text'
                name='username'
                onChange={inputChange}
                value={user.username}
                placeholder='Username'
              />
            </div>
            <div className='form-group has-feedback'>
              <input
                className='form-control'
                type='text'
                name='address'
                onChange={inputChange}
                value={user.address}
                placeholder='Address'
              />
            </div>
          </div>
          <div className='modal-footer'>
            <button className='btn btn-primary' onClick={onCloseModel}>
              Save
            </button>
            <button className='btn btn-default pull-right' data-dismiss='modal'>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
