export const auctionGetters = {
  // All auctions
  allAuctions: (state: any) => {
    return state.auctions;
  },

  // Product by ID
  auctionById: (state: any, getters: any) => (id: number) => {
    if (getters.allAuctions.length > 0) {
      return getters.allAuctions.filter((p: any) => p.id === id)[0];
    } else {
      return state.auction;
    }
  },

  auctionIndex: (state: any, getters: any) => (id: number) => {
    return state.auctions.map((auction: any) => auction.productId).indexOf(id);
  },

  // current auction price
  currentAuctionPrice: (state: any) => {
    return state.auction.currentPrice;
  },

  // temp price
  tempPrice: (state: any) => {
    return state.tempPrice;
  },
};

export const manufacturerGetters = {
  // All manufacturers
  allManufacturers: (state: any) => state.manufacturers,
};

export const categoriesGetters = {
  // All categories
  allCategories: (state: any) =>
    state.categories.map((category: any) => category.categoryName),

  // favourite categories
  favCategories: (state: any) => state.favCategories,
};

export const authGetters = {
  // token
  getToken: (state: any) => state.token,

  // bearer token
  getBearerToken: (state: any) => `Bearer ${state.token}`,
};
