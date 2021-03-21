import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForShop = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);