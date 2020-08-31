export const auctionGetters = {
  // All auctions
  allAuctions: (state: any) => {
    return state.auctions;
  },

  // Get Product by ID
  auctionById: (state: any, getters: any) => (id: any) => {
    if (getters.allAuctions.length > 0) {
      return getters.allAuctions[0].filter((p: any) => p.id === id)[0];
    } else {
      return state.auction;
    }
  },

  currentAuctionPrice: (state: any) => {
    return state.auction.currentPrice;
  },

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
