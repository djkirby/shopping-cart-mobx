import React from 'react';
import CategoryNavigation from '../components/CategoryNavigation';
import mobxReact from 'mobx-react';
import store from '../store';

const CategoryNavigationContainer = mobxReact.observer(() =>
  <CategoryNavigation
    categories={store.productCategories}
    categoryFilter={store.filters.category}
    onCategoryFilterChange={newCategory => { store.filters.category = newCategory }} />
);

export default CategoryNavigationContainer;
