import StoresActionTypes from './stores.types';

export const addStoreInfo = item => ({
    type: StoresActionTypes.ADD_STORES,
    payload: item
})