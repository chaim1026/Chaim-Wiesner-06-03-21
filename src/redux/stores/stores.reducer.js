import StoresActionTypes from './stores.types';
import { addStoreAndAggregatedProfit } from './stores.utils';

const INITIAL_STATE = {
    storesList: []
};

const storesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case StoresActionTypes.ADD_STORES:
            return {
                ...state,
                storesList: addStoreAndAggregatedProfit(state.storesList, action.payload)
            };
        default:
            return state;
    }
};

export default storesReducer;