import DeliveredItemsActionTypes from './delivered-items.types';
import { addItemToDeliveredList } from './delivered-items.utils';

const INITIAL_STATE = {
    deliveredItemsList: []
};

const deliveredItemsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DeliveredItemsActionTypes.ADD_TO_DELIVERED:
            return {
                ...state,
                deliveredItemsList: addItemToDeliveredList(state.deliveredItemsList, action.payload)
            };
        default:
            return state;
    }
};

export default deliveredItemsReducer;