import React from 'react';

export const PaymentDetail = ({ totalAmount, actionProgress, onFinish }) => {
  return (
    <div className='panel panel-default'>
      <div className='panel-heading'>
        <h3 className='panel-title'>Payment Details</h3>
      </div>
      <div className='panel-body'>
        <form role='form'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='form-group'>
                <label htmlFor='cardNumber'>CARD NUMBER</label>
                <div className='input-group'>
                  <input
                    type='text'
                    className='form-control'
                    id='cardNumber'
                    placeholder='Valid Card Number'
                    required
                    autoFocus
                  />
                  <span className='input-group-addon'>
                    <span className='glyphicon glyphicon-lock'></span>
                  </span>
                </div>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='form-group'>
                <label htmlFor='expityMonth'>EXPIRY DATE</label>
                <div className='row'>
                  <div className='col-md-6'>
                    <input
                      type='text'
                      className='form-control'
                      id='expityMonth'
                      placeholder='MM'
                      required
                    />
                  </div>
                  <div className='col-md-6'>
                    <input
                      type='text'
                      className='form-control'
                      id='expityYear'
                      placeholder='YY'
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='form-group'>
                <label htmlFor='cvCode'>CV CODE</label>
                <input
                  type='password'
                  className='form-control'
                  id='cvCode'
                  placeholder='CV'
                  required
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className='panel-footer'>
        Final Payment{' '}
        <span className='badge badge-pill badge-success'>{totalAmount}</span>
      </div>
      <div className='progress'>
        <div
          className='progress-bar'
          role='progressbar'
          style={{ width: `${actionProgress}%` }}
          aria-valuenow={actionProgress}
          aria-valuemin='0'
          aria-valuemax='100'
        >
          {actionProgress}%
        </div>
      </div>
      <button onClick={onFinish} className='btn btn-success btn-lg btn-block'>
        Finish payment
      </button>
    </div>
  );
};
