import React from 'react';
import { shallow } from 'enzyme';
import StoreInfo from './store-info.component';

it('expect to render Header component', () => {
    const mockStore = {
        id: 1, 
        onlineStore: 'amazon', 
        sum:20
    }
    expect(shallow(<StoreInfo store={mockStore} />)).toMatchSnapshot()
})