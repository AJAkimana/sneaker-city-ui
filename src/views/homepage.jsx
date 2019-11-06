import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { ProductCard, CartNav } from '../components';
import { getAllProducts, getUserCartsItems } from '../actions';
import { productsInitialState, getLocalUser } from '../utils';

class HomePage extends Component {
  state = { ...productsInitialState };
  componentDidMount() {
    const user = getLocalUser();
    const { username } = user;
    this.props.getAllProducts();
    this.props.getUserCartsItems(username);
  }
  componentWillReceiveProps({ products, cartProducts }) {
    this.setState(prevStates => ({
      ...prevStates,
      products,
      cartProducts
    }));
  }
  render() {
    const {
      products: { paginatedItems, pageNumber, pageSize, pages },
      cartProducts
    } = this.state;
    return (
      <div>
        <ToastContainer />
        <div className='container'>
          <CartNav
            totalItems={cartProducts.length}
            title='Welcome to Sneacker City'
          />
          <div className='row mt-5'>
            {paginatedItems.map(product => (
              <ProductCard
                key={product.id}
                name={product.name}
                model={product.model}
                price={product.price}
                picture={product.picture}
                productId={product.id}
              />
            ))}
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <nav aria-label='...'>
                <ul className='pagination pagination-lg'>
                  <li className='page-item disabled'>
                    <a className='page-link' href='#' tabIndex='-1'>
                      1
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#'>
                      2
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#'>
                      3
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ product, cart }) => ({
  products: product.products,
  cartProducts: cart.products
});
const connectedHomePage = connect(
  mapStateToProps,
  {
    getAllProducts,
    getUserCartsItems
  }
)(HomePage);
export { connectedHomePage as HomePage };
