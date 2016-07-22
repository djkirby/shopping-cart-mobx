import mobx from 'mobx';
import _ from 'lodash';

export default mobx.observable({
  productsById: {
    '1111-2222-3333-4444': {
      brand: 'Polo',
      name: 'polo',
      price: 3000,
      category: 'Shirts'
    },
    '2222-3333-4444-5555': {
      brand: 'Nike',
      name: 'T Shirt',
      price: 6000,
      category: 'Shirts'
    },
    '3333-4444-5555-6666': {
      brand: 'Adidas',
      name: 'Shorts',
      price: 2000,
      category: 'Shorts'
    },
    '4444-5555-6666-7777': {
      brand: 'Adidas',
      name: 'Cleats',
      price: 40000,
      category: 'Shoes'
    },
    '5555-6666-7777-8888': {
      brand: 'Nike',
      name: 'Basketball shorts',
      price: 40000,
      category: 'Shorts'
    },
  },
  cartIds: [],
  filters: {
    category: 'all',
    brand: 'all'
  },

  visibleProductIds: function() {
    return _(this.productsById)
      .pickBy((product, productId) =>
        (product.brand === this.filters.brand || this.filters.brand === 'all') &&
        (product.category === this.filters.category || this.filters.category === 'all')
      )
      .keys()
      .value();
  },

  cartTotal: function() {
    return this.cartIds.map(productId =>
      this.productsById[productId].price
    ).reduce((acc, e) => acc + e, 0);
  },

  cartCount: function() {
    return this.cartIds.length;
  },

  itemCount: function(productId) {
    return this.cartIds.filter(id => id === productId).length;
  },

  productCategories: function() {
    return _(this.productsById)
      .values()
      .map(product => product.category)
      .uniq()
      .value();
  },

  productBrands: function() {
    return _(this.productsById)
      .values()
      .map(product => product.brand)
      .uniq()
      .value();
  }
});
