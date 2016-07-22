import React, { PropTypes } from 'react';
import ProductListingContainer from '../containers/ProductListingContainer';

const ProductListings = ({ productIds }) => (
  <div>
    {productIds.length === 0 ? 'No products match your filters.' : null}
    <ul>
      {productIds.map(id =>
        <li key={id}>
          <ProductListingContainer productId={id} />
        </li>
      )}
    </ul>
  </div>
);

ProductListings.propTypes = {
  productIds: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired
};

export default ProductListings;
