import React from 'react';
import ProductListings from '../components/ProductListings';
import mobxReact from 'mobx-react';
import store from '../store';

const ProductListingsContainer = mobxReact.observer(() =>
  <ProductListings productIds={store.visibleProductIds} />
);

export default ProductListingsContainer;
