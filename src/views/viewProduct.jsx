import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { ToastContainer } from 'react-toastify';
import { getProductInfo, getUserCartsItems } from '../actions';
import { productInitialState, cartInitialState } from '../utils';
import { defaultImage } from '../components/productCard';
import { CartNav } from '../components';
import { UserModal } from '../components/userModal';

window.jQuery = $;
window.$ = $;
global.jQuery = $;
class ViewProduct extends Component {
  state = {
    ...productInitialState,
    ...cartInitialState,
    user: { username: '', address: '', names: '' }
  };
  componentDidMount() {
    const {
      params: { productId }
    } = this.props.match;
    this.props.getProductInfo(productId);
    this.props.getUserCartsItems('akimana');
  }
  componentWillReceiveProps({ product, products }) {
    this.setState({ product, products });
  }
  addToCart = () => {
    if (!localStorage.user) {
      $(this.modal).modal('show');
    } else {
    }
  };
  closeUserModal = () => {
    $(this.modal).modal('hide');
  };
  handleInputChange = event => {
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  };
  render() {
    const { product, products, user } = this.state;
    return (
      <div>
        <ToastContainer />
        <div className='container'>
          <CartNav totalItems={products.length} />
          <UserModal
            modalRef={modal => (this.modal = modal)}
            onCloseModel={this.closeUserModal}
            user={user}
            inputChange={this.handleInputChange}
          />
          <div className='row'>
            <div className='card mb-3 mt-5'>
              <div className='row no-gutters'>
                <div className='col-md-4'>
                  <img className='card-img' src={defaultImage} alt='Vans' />
                  <div className='card-img-overlay d-flex justify-content-end'>
                    <a href='#' className='card-link text-danger like'>
                      <i className='fas fa-heart'></i>
                    </a>
                  </div>
                </div>
                <div className='col-md-8'>
                  <div className='card-body'>
                    <h4 className='card-title'>{product.name}</h4>
                    <h6 className='card-subtitle mb-2 text-muted'>
                      Model: {product.model}
                    </h6>
                    <p className='card-text'>{product.description}</p>
                    <div className='options d-flex flex-fill'></div>
                    <div className='buy d-flex justify-content-between align-items-center'>
                      <div className='price text-success'>
                        <h5 className='mt-4'>${product.price}</h5>
                      </div>
                      <button
                        className='btn btn-danger mt-3'
                        onClick={this.addToCart}
                      >
                        <i className='fas fa-shopping-cart'></i> Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ product: { product }, cart: { products } }) => ({
  product,
  products
});
const connectedViewProduct = connect(
  mapStateToProps,
  {
    getProductInfo,
    getUserCartsItems
  }
)(ViewProduct);
export { connectedViewProduct as ViewProduct };
