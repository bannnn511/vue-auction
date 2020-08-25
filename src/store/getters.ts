export const productGetters = {
  // All products
  allProducts: (state: any) => {
    return state.products;
  },

  // Get Product by ID
  productById: (state: any, getters: any) => (id: any) => {
    if (getters.allProducts.length > 0) {
      return getters.allProducts.filters((p: any) => p._id === id)[0];
    } else {
      return state.product;
    }
  },
};

export const manufacturerGetters = {
  // All manufacturers
  allManufacturers: (state: any) => state.manufacturers,
};

export const categoriesGetters = {
  // All categories
  allCategories: (state: any) => state.categories,
};
