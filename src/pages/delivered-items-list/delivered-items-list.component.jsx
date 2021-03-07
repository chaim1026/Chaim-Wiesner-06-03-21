import React from 'react';
import './delivered-items-list.styles.scss';
import { connect } from 'react-redux';
import BoughtItem from '../../components/bought-item/bought-item.component';

const DeliveredItemsList = ({ deliveredItems }) => (
    <div className='delivered-items-list'>
        <div className='delivered-items-list-header'>
            <h2>Delivered Item List</h2>
        </div>
        {deliveredItems.map(item => 
            <BoughtItem key={item.id} item={item} />
        )}
    </div>
);

const mapStateToProps = (state) => ({
    deliveredItems: state.deliveredItems.deliveredItemsList,
})

export default connect(mapStateToProps)(DeliveredItemsList);