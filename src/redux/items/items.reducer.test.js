import ItemsActionTypes from './items.types';
import itemsReducer from './items.reducer';

const initialState = {
    itemsList: []
};

describe('itemsReducer', () => {
    it('should return initial state', () => {
      expect(itemsReducer(undefined, {})).toEqual(initialState);
    });
  
    it('should increase quantity of matching item by 1 if addItem action fired with same item as payload', () => {
      const mockItem = {
        id: 1,
        quantity: 3
      };
  
      const mockPrevState = {
        itemsList: [mockItem, { id: 2, quantity: 1 }]
      };
  
      expect(
        itemsReducer(mockPrevState, {
          type: ItemsActionTypes.ADD_ITEM,
          payload: mockItem
        }).itemsList[0].quantity
      ).toBe(4);
    });
  
    it('should remove item from cart if item was delivered action fired with payload of existing item', () => {
      const mockItem = {
        id: 1,
        quantity: 3
      };
  
      const mockPrevState = {
        itemsList: [mockItem, { id: 2, quantity: 1 }]
      };
  
      expect(
        itemsReducer(mockPrevState, {
          type: ItemsActionTypes.ITEM_DELIVERED,
          payload: mockItem
        }).itemsList.includes(item => item.id === 1)
      ).toBe(false);
    });
  });