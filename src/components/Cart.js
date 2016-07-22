import React, { PropTypes } from 'react';
import CartItemContainer from '../containers/CartItemContainer';
import _ from 'lodash';

const Cart = ({ productIds, cartTotal }) => (
  <div className='cart'>
    <div>Cart: {productIds.length} items ({`$${cartTotal/100}`} total)</div>
    <ul>
      {_.uniq(productIds).map(id =>
        <li key={id}>
          <CartItemContainer productId={id} />
        </li>
      )}
    </ul>
  </div>
);

Cart.propTypes = {
  productIds: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  cartTotal: PropTypes.number.isRequired
};

export default Cart;
