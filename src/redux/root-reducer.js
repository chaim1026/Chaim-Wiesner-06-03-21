import { combineReducers } from 'redux';
import itemsReducer from './items/items.reducer';
import deliveredItemsReducer from './delivered-items/delivered-items.reducer';
import storesReducer from './stores/stores.reducer';
import shopReducer from './shop/shop.reducer';

export default combineReducers({
    items: itemsReducer,
    deliveredItems: deliveredItemsReducer,
    stores: storesReducer,
    shop: shopReducer,
});