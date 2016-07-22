import React, { PropTypes } from 'react';

const CategoryNavigation = ({ categories, categoryFilter, onCategoryFilterChange }) => (
  <div className='categories'>
    <div>Product Categories: </div>
    <ul>
      <li>
        <input
          type='radio'
          value='all'
          name='category'
          checked={categoryFilter === 'all'}
          onChange={() => onCategoryFilterChange('all')} />
        All
      </li>
      {categories.map(category =>
        <li key={category}>
          <input
            type='radio'
            name='category'
            value={category}
            checked={categoryFilter === category}
            onChange={() => onCategoryFilterChange(category)} />
          {category}
        </li>
      )}
    </ul>
  </div>
);

CategoryNavigation.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  categoryFilter: PropTypes.string.isRequired,
  onCategoryFilterChange: PropTypes.func.isRequired
};

export default CategoryNavigation;
