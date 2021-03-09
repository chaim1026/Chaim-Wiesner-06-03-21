import StoresActionTypes from './stores.types';
import storesReducer from './stores.reducer';

const initialState = {
    storesList: []
};

describe('storesReducer', () => {
    it('should return initial state', () => {
      expect(storesReducer(undefined, {})).toEqual(initialState);
    });
  
    it('should increase price of matching item with the same onlineStore if add store info action fired with same item.onlineStore as payload', () => {
      const mockItem = {
        id: 1,
        onlineStore: 'amazon',
        price: 100
      };
  
      const mockPrevState = {
        storesList: [mockItem, { id: 2, onlineStore: 'zappos', price: 100}]
      };
  
      expect(
        storesReducer(mockPrevState, {
          type: StoresActionTypes.ADD_STORES,
          payload: mockItem
        }).storesList[0].price + mockItem.price
      ).toBe(200);
    });
});