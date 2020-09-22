import {
  ADD_AUCTION,
  ADD_AUCTION_SUCCESS,
  ALL_AUCTIONS,
  ALL_AUCTIONS_SUCCESS,
  AUCTION_BY_ID,
  AUCTION_BY_ID_SUCCESS,
  BID_PRICE,
  UPDATE_PRODUCT_TEMP_PRICE,
  UPDATE_PRODUCT_PRICE_WITH_ID,
} from "@/store/mutation-types";

export const auctionMutations = {
  [ALL_AUCTIONS](state: any) {
    state.showLoader = true;
  },

  [ALL_AUCTIONS_SUCCESS](state: any, payload: any) {
    state.showLoader = false;
    state.auctions = state.auctions.concat(payload);
  },

  [ADD_AUCTION](state: any) {
    state.showLoader = true;
  },

  [ADD_AUCTION_SUCCESS](state: any, payload: any) {
    state.showLoader = false;
    state.auctions = payload;
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

  [UPDATE_PRODUCT_PRICE_WITH_ID](state: any, payload: any) {
    state.auctions[payload.index].currentPrice = payload.price;
  },
};
