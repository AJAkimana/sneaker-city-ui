import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { ToastContainer } from 'react-toastify';
import { getProductInfo, getUserCartsItems, addItemToCart } from '../actions';
import { productInitialState, cartInitialState, getLocalUser } from '../utils';
import { defaultImage } from '../components/productCard';
import { CartNav } from '../components';
import { UserModal } from '../components/userModal';
import { Notifier } from '../helpers/notifier';

class ViewProduct extends Component {
  state = {
    ...productInitialState,
    ...cartInitialState,
    cart: {
      product_id: null,
      user: { username: '', address: '', names: '' },
      size: ''
    },
    cartTotalItems: 0
  };
  componentDidMount() {
    const {
      params: { productId }
    } = this.props.match;
    const user = getLocalUser();
    const { username } = user;
    this.props.getProductInfo(productId);
    this.props.getUserCartsItems(username);
  }
  UNSAFE_componentWillReceiveProps({ product, products, message }) {
    const cart = { ...this.state.cart };
    let cartTotalItems = this.state.cartTotalItems;
    cart.product_id = product.id;
    if (message) {
      $(this.modal).modal('hide');
      Notifier.success(message);
      cartTotalItems++;
    } else {
      cartTotalItems = products.length;
    }
    this.setState({ product, products, cart, cartTotalItems });
  }
  addToCart = () => {
    const { cart } = this.state;
    if (!localStorage.user) {
      $(this.modal).modal('show');
    } else {
      const user = JSON.parse(localStorage.user);
      cart.user = user;
      this.props.addItemToCart(cart);
    }
  };
  handleInputChange = event => {
    const card = { ...this.state.cart };
    card.user[event.target.name] = event.target.value;
    this.setState({ card });
  };
  selectSize = size => {
    let cart = { ...this.state.cart };
    cart.size = size;
    this.setState({ cart });
  };
  saveUserToLocal = () => {
    let { names, username, address } = this.state.cart.user;
    const { card } = this.state;
    if (names && username && address) {
      localStorage.setItem('user', JSON.stringify(this.state.cart.user));
      this.props.addItemToCart(card);
    } else {
      Notifier.error('Please add your information');
    }
  };
  render() {
    const {
      product,
      cartTotalItems,
      cart: { user }
    } = this.state;
    return (
      <div>
        <ToastContainer />
        <div className='container'>
          <CartNav totalItems={cartTotalItems} title={product.name} />
          <UserModal
            modalRef={modal => (this.modal = modal)}
            saveUserInfo={this.saveUserToLocal}
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
                    <h6 className='card-subtitle mb-2 text-muted'>
                      Brand: {product.brand}
                    </h6>
                    <p className='card-text'>{product.description}</p>
                    <div className='options d-flex flex-fill'></div>
                    <div className='row'>
                      <div className='col-md-7'>
                        <div className='text-center'>Quantities in stock</div>
                      </div>
                      <div className='col-md-5'>
                        <div className='text-center'>
                          Release date:{' '}
                          <span className='badge badge-secondary'>
                            {product.release_date}
                          </span>
                        </div>
                      </div>
                      {product.in_stock.map((stock, index) => (
                        <div
                          key={index}
                          className='btn-group col-4 mt-2'
                          role='group'
                          aria-label='Basic example'
                          onClick={() => this.selectSize(stock.size)}
                        >
                          <button type='button' className='btn btn-secondary'>
                            Size:{stock.size}
                          </button>
                          <button type='button' className='btn btn-secondary'>
                            Stock:{stock.remaining}
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className='buy d-flex justify-content-between align-items-center'>
                      <div className='price text-success'>
                        <h5 className='mt-4'>RwF{product.price}</h5>
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
const mapStateToProps = ({
  product: { product },
  cart: { products, message }
}) => ({
  product,
  message,
  products
});
const connectedViewProduct = connect(
  mapStateToProps,
  {
    getProductInfo,
    getUserCartsItems,
    addItemToCart
  }
)(ViewProduct);
export { connectedViewProduct as ViewProduct };
