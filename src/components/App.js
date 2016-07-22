import React from 'react';
import '../App.css';
import CategoryNavigationContainer from '../containers/CategoryNavigationContainer';
import ProductFiltersContainer from '../containers/ProductFiltersContainer';
import ProductListingsContainer from '../containers/ProductListingsContainer';
import CartContainer from '../containers/CartContainer';

const App = () => (
  <div className="app">
    <div className='headerbar'>
      <CategoryNavigationContainer />
    </div>
    <div className='body'>
      <div className='sidebar'>
        <ProductFiltersContainer />
      </div>
      <div className='content'>
        <ProductListingsContainer />
      </div>
    </div>
    <div className='footer'>
      <CartContainer />
    </div>
  </div>
);

export default App;
