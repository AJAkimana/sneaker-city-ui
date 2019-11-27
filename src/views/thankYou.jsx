import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { finishShoping } from "../actions";
import { Notifier } from "../helpers";
import { getLocalUser } from "../utils";
import { ToastContainer } from "react-toastify";

class ThankYou extends Component {
  state = {};
  componentDidMount() {
    const user = getLocalUser();
    const { username } = user;
    if (username) {
      this.props.finishShoping();
    } else window.location.replace("/");
  }
  UNSAFE_componentWillReceiveProps({ message }) {
    Notifier.success(message);
  }
  render() {
    return (
      <div className="jumbotron text-center">
        <ToastContainer />
        <h1 className="display-3">Thank You!</h1>
        <p className="lead">
          <strong>Please check your email</strong> for further instructions on
          how to complete your account setup.
        </p>
        <hr />
        <p>
          Having trouble? <Link to="#">Contact us</Link>
        </p>
        <p className="lead">
          <Link to="/" className="btn btn-primary btn-sm" role="button">
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
const connectedThankYou = connect(mapStateToProps, {
  finishShoping
})(ThankYou);
export { connectedThankYou as ThankYou };
