import { combineReducers } from 'redux';
import itemsReducer from './items/items.reducer';
import deliveredItemsReducer from './delivered-items/delivered-items.reducer';

export default combineReducers({
    items: itemsReducer,
    deliveredItems: deliveredItemsReducer,
});