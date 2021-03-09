import React from 'react';
import { shallow } from 'enzyme';
import ErrorMessage from './error-message.component';

it('should render ErrorMessage component', () => {
    expect(shallow(<ErrorMessage />)).toMatchSnapshot();
});