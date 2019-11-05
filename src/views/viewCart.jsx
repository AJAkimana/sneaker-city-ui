import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { ToastContainer } from 'react-toastify';
import { getUserCartsItems } from '../actions';
import { cartInitialState } from '../utils';
import { defaultImage } from '../components/productCard';
import { CartNav, CartIem } from '../components';
import { UserModal } from '../components/userModal';
import { Notifier } from '../helpers/notifier';

window.jQuery = $;
window.$ = $;
global.jQuery = $;
class ViewCart extends Component {
  state = {
    ...cartInitialState,
    numberOfItems: 0,
    totalAmout: 0,
    itemSelected: []
  };
  componentDidMount() {
    const user = JSON.parse(localStorage.user);
    const username = user ? user.username : '';
    this.props.getUserCartsItems(username);
  }
  componentWillReceiveProps({ products }) {
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
  render() {
    const { products, totalAmout, numberOfItems } = this.state;
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
              {products.map((product, index) => (
                <CartIem
                  key={index}
                  name={product.name}
                  description={product.description}
                  model={product.model}
                  size={product.size}
                  price={product.price}
                  onSelectItem={() => this.selectCartProduct(product)}
                />
              ))}
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
                <button className='btn btn-success'>
                  <i className='fas fa-shopping-cart'></i> Check out to pay
                </button>
                <div className='row mt-5'>
                  <div class='panel panel-default'>
                    <div class='panel-heading'>
                      <h3 class='panel-title'>Payment Details</h3>
                    </div>
                    <div class='panel-body'>
                      <form role='form'>
                        <div class='row'>
                          <div className='col-md-12'>
                            <div class='form-group'>
                              <label for='cardNumber'>CARD NUMBER</label>
                              <div class='input-group'>
                                <input
                                  type='text'
                                  class='form-control'
                                  id='cardNumber'
                                  placeholder='Valid Card Number'
                                  required
                                  autofocus
                                />
                                <span class='input-group-addon'>
                                  <span class='glyphicon glyphicon-lock'></span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class='col-md-12'>
                            <div class='form-group'>
                              <label for='expityMonth'>EXPIRY DATE</label>
                              <div class='row'>
                                <div class='col-md-6'>
                                  <input
                                    type='text'
                                    class='form-control'
                                    id='expityMonth'
                                    placeholder='MM'
                                    required
                                  />
                                </div>
                                <div class='col-md-6'>
                                  <input
                                    type='text'
                                    class='form-control'
                                    id='expityYear'
                                    placeholder='YY'
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class='col-md-12'>
                            <div class='form-group'>
                              <label for='cvCode'>CV CODE</label>
                              <input
                                type='password'
                                class='form-control'
                                id='cvCode'
                                placeholder='CV'
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <ul class='nav nav-pills nav-stacked'>
                      <li class='active'>
                        <a href='#'>
                          <span class='badge pull-right'>
                            <span class='glyphicon glyphicon-usd'></span>4200
                          </span>{' '}
                          Final Payment
                        </a>
                      </li>
                    </ul>
                    <br />
                    <a
                      href='http://www.jquery2dotnet.com'
                      class='btn btn-success btn-lg btn-block'
                      role='button'
                    >
                      Pay
                    </a>
                  </div>
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
