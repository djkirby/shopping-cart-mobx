import React from 'react';
import ProductFilters from '../components/ProductFilters';
import mobxReact from 'mobx-react';
import store from '../store';

const ProductFiltersContainer = mobxReact.observer(() =>
  <ProductFilters
    brands={store.productBrands}
    brandFilter={store.filters.brand}
    onBrandFilterChange={newBrand => { store.filters.brand = newBrand }} />
);

export default ProductFiltersContainer;
