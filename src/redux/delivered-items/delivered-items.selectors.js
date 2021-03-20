import { createSelector } from 'reselect';

const selectDeliveredItems = state => state.deliveredItems;

export const selectDeliveredItemsList = createSelector(
    [selectDeliveredItems],
    deliveredItems => deliveredItems.deliveredItemsList
);