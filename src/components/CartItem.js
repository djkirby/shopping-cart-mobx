import React, { PropTypes } from 'react';

const CartItem = ({ product, quantity }) => (
  <div>
    ({quantity}) {product.brand}&nbsp;{product.name} ({`$${product.price / 100}`})
  </div>
);

CartItem.propTypes = {
  product: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  quantity: PropTypes.number.isRequired
};

export default CartItem;
