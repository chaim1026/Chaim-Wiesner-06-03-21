import ItemsActionTypes from './items.types';

export const addItem = item => ({
    type: ItemsActionTypes.ADD_ITEM,
    payload: item
});

export const itemDelivered = item => ({
    type: ItemsActionTypes.ITEM_DELIVERED,
    payload: item
});