import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { finishShoping } from '../actions';
import { Notifier } from '../helpers';

class ThankYou extends Component {
  state = {};
  componentDidMount() {
    this.props.finishShoping();
  }
  UNSAFE_componentWillReceiveProps({ message }) {
    Notifier.success(message);
  }
  render() {
    return (
      <div className='jumbotron text-center'>
        <h1 className='display-3'>Thank You!</h1>
        <p className='lead'>
          <strong>Please check your email</strong> for further instructions on
          how to complete your account setup.
        </p>
        <hr />
        <p>
          Having trouble? <a href=''>Contact us</a>
        </p>
        <p className='lead'>
          <Link to='/' className='btn btn-primary btn-sm' role='button'>
            Continue to homepage
          </Link>
        </p>
      </div>
    );
  }
}
const mapStateToProps = ({ cart: { message } }) => ({
  message
});
const connectedThankYou = connect(
  mapStateToProps,
  {
    finishShoping
  }
)(ThankYou);
export { connectedThankYou as ThankYou };
