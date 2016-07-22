import React, { PropTypes } from 'react';
import CartItem from '../components/CartItem';
import mobxReact from 'mobx-react';
import store from '../store';

const CartItemContainer = mobxReact.observer(({ productId }) =>
  <CartItem
    product={store.productsById[productId]}
    quantity={store.itemCount(productId)} />
);

CartItemContainer.propTypes = {
  productId: PropTypes.string.isRequired
};

export default CartItemContainer;
