import React, { PropTypes } from 'react';

const ProductFilters = ({ brands, brandFilter, onBrandFilterChange }) => (
  <div>
    <div>Product Filters</div>
    <div>Brand:</div>
    <ul>
      <li>
        <input
          type='radio'
          name='brand'
          value='all'
          checked={brandFilter === 'all'}
          onChange={() => onBrandFilterChange('all')} />
        All
      </li>
      {brands.map(brand =>
        <li key={brand}>
          <input
            type='radio'
            name='brand'
            value={brand}
            checked={brandFilter === brand}
            onChange={() => onBrandFilterChange(brand)} />
          &nbsp;{brand}
        </li>
      )}
    </ul>
  </div>
);

ProductFilters.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  brandFilter: PropTypes.string.isRequired,
  onBrandFilterChange: PropTypes.func.isRequired
};

export default ProductFilters;
