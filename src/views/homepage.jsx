import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { ProductCard } from '../components';
import { getAllProducts } from '../actions';
import { productsInitialState } from '../utils';

class HomePage extends Component {
  state = { ...productsInitialState };
  componentDidMount() {
    this.props.getAllProducts();
  }
  componentWillReceiveProps({ products }) {
    this.setState({ products });
  }
  render() {
    const {
      products: { paginatedItems, pageNumber, pageSize, pages }
    } = this.state;
    return (
      <div>
        <ToastContainer />
        <div className='container'>
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
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ product }) => ({
  products: product.products
});
const connectedHomePage = connect(
  mapStateToProps,
  {
    getAllProducts
  }
)(HomePage);
export { connectedHomePage as HomePage };
