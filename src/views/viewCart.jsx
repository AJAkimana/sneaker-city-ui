import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { ToastContainer } from 'react-toastify';
import { getUserCartsItems } from '../actions';
import { cartInitialState, getLocalUser } from '../utils';
import { CartNav, CartIem, PaymentDetail } from '../components';
import { Notifier } from '../helpers';

window.jQuery = $;
window.$ = $;
global.jQuery = $;
class ViewCart extends Component {
  state = {
    ...cartInitialState,
    numberOfItems: 0,
    totalAmout: 0,
    itemSelected: [],
    showPayment: 'd-none',
    actionProgress: 0
  };
  componentDidMount() {
    const user = getLocalUser();
    const { username } = user;
    this.props.getUserCartsItems(username);
  }
  UNSAFE_componentWillReceiveProps({ products }) {
    this.setState({ products });
  }
  selectCartProduct = product => {
    let { itemSelected, totalAmout, numberOfItems } = this.state;
    const index = itemSelected.findIndex(item => item.id === product.id);
    if (index === -1) {
      itemSelected.push({ id: product.id });
      totalAmout += product.price;
      numberOfItems += 1;
    } else {
      itemSelected.splice(index, 1);
      totalAmout -= product.price;
      numberOfItems -= 1;
    }
    this.setState({ itemSelected, totalAmout, numberOfItems });
  };
  checkoutToPay = () => {
    const { numberOfItems } = this.state;
    if (numberOfItems) {
      this.setState({ showPayment: '' });
    } else {
      Notifier.error(
        'Sorry please add at least one product from shopping cart'
      );
    }
  };
  finishPayment = () => {
    setTimeout(() => {
      this.props.history.replace('/thank-you');
    }, 3000);
  };
  render() {
    const {
      products,
      totalAmout,
      numberOfItems,
      showPayment,
      actionProgress
    } = this.state;
    return (
      <div>
        <ToastContainer />
        <div className='container'>
          <CartNav
            totalItems={products.length}
            title='List of items on you cart'
          />

          <div className='row'>
            <div className='card mb-5 mt-5 col-md-8'>
              {products.length ? (
                products.map((product, index) => (
                  <CartIem
                    key={index}
                    name={product.name}
                    description={product.description}
                    model={product.model}
                    size={product.size}
                    price={product.price}
                    onSelectItem={() => this.selectCartProduct(product)}
                  />
                ))
              ) : (
                <div className='display-4 mt-5'>
                  <h4 className='text-center'>
                    Oops, Your cart is empty. Please go to{' '}
                    <Link to='/' className='btn-link'>
                      Homepage
                    </Link>{' '}
                    to add products
                  </h4>
                </div>
              )}
            </div>
            <div className='card col-md-4 mb-5 mt-5'>
              <div className='card-header'>
                <h4 className='text-center'>Amount to pay</h4>
              </div>
              <div className='card-body'>
                <h4>
                  Total items:{' '}
                  <label htmlFor='total-items' className='text-info'>
                    {numberOfItems}
                  </label>
                </h4>
                <h4>
                  Total amount:{' '}
                  <label htmlFor='total-items' className='text-info'>
                    RwF{totalAmout}
                  </label>
                </h4>
                <button
                  className='btn btn-success'
                  onClick={() => this.checkoutToPay()}
                >
                  <i className='fas fa-shopping-cart'></i> Check out to pay
                </button>
                <div className={`row mt-5 ${showPayment}`}>
                  <PaymentDetail
                    totalAmount={totalAmout}
                    actionProgress={actionProgress}
                    onFinish={this.finishPayment}
                  />
                </div>
              </div>
              <div className='card-footer'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ cart: { products } }) => ({
  products
});
const connectedViewCart = connect(
  mapStateToProps,
  {
    getUserCartsItems
  }
)(ViewCart);
export { connectedViewCart as ViewCart };
