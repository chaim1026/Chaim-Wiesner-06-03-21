import { createSelector } from 'reselect';

const selectItems = state => state.items;

export const selectItemsList = createSelector(
    [selectItems],
    items => items.itemsList
);

export const selectItemsListCount = createSelector(
    [selectItemsList],
    itemsList => 
    itemsList.reduce(
        (accumalatedQuantity, item) =>
         accumalatedQuantity + item.quantity, 
         0
    )
);

export const selectItemsListTotal = createSelector(
    [selectItemsList],
    itemsList => 
    itemsList.reduce(
        (accumalatedQuantity, item) =>
         accumalatedQuantity + item.quantity * item.price, 
         0
    )
);