import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { ToastContainer } from 'react-toastify';
import { getUserCartsItems } from '../actions';
import { cartInitialState, getLocalUser } from '../utils';
import { defaultImage } from '../components/productCard';
import { CartNav, CartIem, PaymentDetail } from '../components';
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
    const user = getLocalUser();
    const { username } = user;
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
                  <PaymentDetail />
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
