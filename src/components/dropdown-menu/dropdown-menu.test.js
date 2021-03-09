import React from 'react';
import { shallow } from 'enzyme';
import DropdownMenu from './dropdown-menu.component';

it('should render DropdownMenu component', () => {
    const mockCurrencies = [
        {
            symbol: 'ILS',
            rate: 3.31
        }
    ]
    expect(shallow(<DropdownMenu currencies={mockCurrencies} />)).toMatchSnapshot();
});