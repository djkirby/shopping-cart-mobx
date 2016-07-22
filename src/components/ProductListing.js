import React, { PropTypes } from 'react';

const ProductListing = ({ product, onAddToCart }) => (
  <div className='product-listing'>
    {product.brand}&nbsp;{product.name} ({`$${product.price / 100}`})
    <button onClick={onAddToCart}>Add to Cart</button>
  </div>
);

ProductListing.propTypes = {
  product: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired
}

export default ProductListing;
