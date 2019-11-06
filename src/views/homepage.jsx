import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { ProductCard, CartNav, Paginator } from '../components';
import { getAllProducts, getUserCartsItems } from '../actions';
import { productsInitialState, getLocalUser } from '../utils';

class HomePage extends Component {
  state = { ...productsInitialState, allPages: [], currentPage: 1 };
  componentDidMount() {
    const user = getLocalUser();
    const { username } = user;
    this.props.getAllProducts(1, 10);
    this.props.getUserCartsItems(username);
  }
  UNSAFE_componentWillReceiveProps({ products, cartProducts }) {
    const allPages = Array.from({ length: products.pages }, (v, k) => k + 1);
    this.setState({
      products,
      cartProducts,
      allPages
    });
  }
  goToPage = page => {
    this.props.getAllProducts(page, 10);
    this.setState({ currentPage: page });
  };
  render() {
    const {
      products: { paginatedItems },
      cartProducts,
      allPages,
      currentPage
    } = this.state;
    return (
      <div className='mb-5'>
        <ToastContainer />
        {paginatedItems.length ? (
          <div className='container'>
            <CartNav
              totalItems={cartProducts.length}
              title='Welcome to Sneacker City'
            />

            <div className='row'>
              <div className='col-md-10'>
                <Paginator allPages={allPages} goToPage={this.goToPage} />
              </div>
              <div className='col-md-2'>
                <h4 className='text-center'>Page: {currentPage}</h4>
              </div>
            </div>
            <div className='row mt-2'>
              {paginatedItems.map(product => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  model={product.model}
                  price={product.price}
                  picture={product.picture}
                  productId={product.id}
                  releaseDate={product.release_date}
                />
              ))}
            </div>
            <div className='row'>
              <div className='col-md-10'>
                <Paginator allPages={allPages} goToPage={this.goToPage} />
              </div>
              <div className='col-md-2'>
                <h4 className='text-center'>Page: {currentPage}</h4>
              </div>
            </div>
          </div>
        ) : (
          <div className='container mt-5'>
            <h4 className='display-4 text-center'>
              Oops, No products. Please check the network
            </h4>
          </div>
        )}
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
