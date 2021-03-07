import React from 'react';
import './items-icon.styles.scss';
import { connect } from 'react-redux';
import { ReactComponent as ItemsListIcon } from '../../assets/shopping-bag.svg';
import { selectItemsListCount } from '../../redux/items/items.selectors';


const ItemsIcon = ({ itemCount }) => (
    <div className='items-icon'>
        <ItemsListIcon className='items-list-icon' />
        <span className='item-count'>{ itemCount }</span>
    </div>
);

const mapStateToProps = (state) => ({
    itemCount: selectItemsListCount(state)
});

export default connect(mapStateToProps)(ItemsIcon);