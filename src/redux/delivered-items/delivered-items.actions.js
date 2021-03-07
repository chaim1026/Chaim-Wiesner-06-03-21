import DeliveredItemsActionTypes from './delivered-items.types';

export const addToDelivered = item => ({
    type: DeliveredItemsActionTypes.ADD_TO_DELIVERED,
    payload: item
});