import { createSelector } from 'reselect';

const selectStores = state => state.stores;

export const selectStoresList = createSelector(
    [selectStores],
    stores => stores.storesList
);