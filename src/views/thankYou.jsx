import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ThankYou extends Component {
  state = {};
  render() {
    return (
      <div class='jumbotron text-center'>
        <h1 class='display-3'>Thank You!</h1>
        <p class='lead'>
          <strong>Please check your email</strong> for further instructions on
          how to complete your account setup.
        </p>
        <hr />
        <p>
          Having trouble? <a href=''>Contact us</a>
        </p>
        <p class='lead'>
          <Link to='/' class='btn btn-primary btn-sm' role='button'>
            Continue to homepage
          </Link>
        </p>
      </div>
    );
  }
}

export { ThankYou };
