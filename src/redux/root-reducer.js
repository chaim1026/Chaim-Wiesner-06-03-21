import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import itemsReducer from './items/items.reducer';
import deliveredItemsReducer from './delivered-items/delivered-items.reducer';
import storesReducer from './stores/stores.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['items', 'deliveredItems', 'stores', 'shop']
};

const rootReducer = combineReducers({
    items: itemsReducer,
    deliveredItems: deliveredItemsReducer,
    stores: storesReducer,
    shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);