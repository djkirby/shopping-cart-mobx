import React, { PropTypes } from 'react';
import ProductListing from '../components/ProductListing';
import mobxReact from 'mobx-react';
import store from '../store';

const ProductListingContainer = mobxReact.observer(({ productId, onAddToCart }) =>
  <ProductListing
    product={store.productsById[productId]}
    onAddToCart={() => store.cartIds.push(productId)} />
);

ProductListingContainer.propTypes = {
  productId: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default ProductListingContainer;
