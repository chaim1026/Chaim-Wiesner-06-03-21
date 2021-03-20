import React from 'react';
import './delivered-items-list.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDeliveredItemsList } from '../../redux/delivered-items/delivered-items.selectors';
import BoughtItem from '../../components/bought-item/bought-item.component';

const DeliveredItemsList = ({ deliveredItems }) => (
    <div className='delivered-items-list'>
        <div className='delivered-items-list-header'>
            <h2 className='header-text'>Delivered Item List</h2>
        </div>
        {deliveredItems.map(item => 
            <BoughtItem key={item.id} item={item} />
        )}
    </div>
);

const mapStateToProps = createStructuredSelector({
    deliveredItems: selectDeliveredItemsList,
})

export default connect(mapStateToProps)(DeliveredItemsList);