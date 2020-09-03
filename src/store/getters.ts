export const auctionGetters = {
  // All auctions
  allAuctions: (state: any) => {
    return state.auctions;
  },

  // Product by ID
  auctionById: (state: any, getters: any) => (id: any) => {
    if (getters.allAuctions.length > 0) {
      return getters.allAuctions[0].filter((p: any) => p.id === id)[0];
    } else {
      return state.auction;
    }
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
  allCategories: (state: any) => state.categories,
};

export const authGetters = {
  // token
  getToken: (state: any) => state.token,

  // bearer token
  getBearerToken: (state: any) => `Bearer ${state.token}`,
};
