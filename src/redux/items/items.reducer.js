import ItemsActionTypes from './items.types';
import { addItemToItemsList } from './items.utils';

const INITIAL_STATE = {
    itemsList: []
};

const itemsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ItemsActionTypes.ADD_ITEM:
            return {
                ...state,
                itemsList: addItemToItemsList(state.itemsList, action.payload)
            };
        case ItemsActionTypes.ITEM_DELIVERED:
            return {
                ...state,
                itemsList: state.itemsList.filter(
                    item => item.id !== action.payload.id
                ) 
            };
        default:
            return state;
    }
};

export default itemsReducer;