import {
  ALL_AUCTIONS,
  ADD_AUCTION_SUCCESS,
  ALL_AUCTIONS_SUCCESS,
  ADD_AUCTION,
  AUCTION_BY_ID,
  AUCTION_BY_ID_SUCCESS,
  BID_PRICE,
  UPDATE_PRODUCT_TEMP_PRICE,
} from "./mutation-types";

export const auctionMutations = {
  [ALL_AUCTIONS](state: any) {
    state.showLoader = true;
  },

  [ALL_AUCTIONS_SUCCESS](state: any, payload: any) {
    state.showLoader = false;
    state.auctions = payload;
    // payload.forEach((element: any) => {
    //   state.auctions.push(element);
    // });
  },

  [ADD_AUCTION](state: any) {
    state.showLoader = true;
  },

  [ADD_AUCTION_SUCCESS](state: any, payload: any) {
    state.showLoader = false;
    state.auctions.push(payload);
  },

  [AUCTION_BY_ID](state: any) {
    state.showLoader = true;
  },

  [AUCTION_BY_ID_SUCCESS](state: any, payload: any) {
    state.showLoader = true;
    state.auction = payload;
  },

  [BID_PRICE](state: any, payload: any) {
    if (payload != null) {
      state.auction = payload;
    }
  },

  [UPDATE_PRODUCT_TEMP_PRICE](state: any, payload: number) {
    state.tempPrice = payload;
  },
};
