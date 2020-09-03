"use strict";
var _a;
exports.__esModule = true;
exports.auctionMutations = void 0;
var mutation_types_1 = require("@/store/mutation-types");
exports.auctionMutations = (_a = {},
    _a[mutation_types_1.ALL_AUCTIONS] = function (state) {
        state.showLoader = true;
    },
    _a[mutation_types_1.ALL_AUCTIONS_SUCCESS] = function (state, payload) {
        state.showLoader = false;
        state.auctions = payload;
        // payload.forEach((element: any) => {
        //   state.auctions.push(element);
        // });
    },
    _a[mutation_types_1.ADD_AUCTION] = function (state) {
        state.showLoader = true;
    },
    _a[mutation_types_1.ADD_AUCTION_SUCCESS] = function (state, payload) {
        state.showLoader = false;
        state.auctions.push(payload);
    },
    _a[mutation_types_1.AUCTION_BY_ID] = function (state) {
        state.showLoader = true;
    },
    _a[mutation_types_1.AUCTION_BY_ID_SUCCESS] = function (state, payload) {
        state.showLoader = true;
        state.auction = payload;
    },
    _a[mutation_types_1.BID_PRICE] = function (state, payload) {
        if (payload != null) {
            state.auction = payload;
        }
    },
    _a[mutation_types_1.UPDATE_PRODUCT_TEMP_PRICE] = function (state, payload) {
        state.tempPrice = payload;
    },
    _a);
