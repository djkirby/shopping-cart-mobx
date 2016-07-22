import React from 'react';
import Cart from '../components/Cart';
import mobxReact from 'mobx-react';
import store from '../store';

const CartContainer = mobxReact.observer(() =>
  <Cart productIds={store.cartIds} cartTotal={store.cartTotal} />
);

export default CartContainer;
