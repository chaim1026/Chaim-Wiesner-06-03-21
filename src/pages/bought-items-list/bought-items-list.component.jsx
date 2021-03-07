import React from 'react';
import './bought-items-list.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectItemsList, selectItemsListTotal } from '../../redux/items/items.selectors';
import BoughtItem from '../../components/bought-item/bought-item.component';

const BoughtItemsList = ({ itemsList, total }) => (
    <div className='bought-items-list'>
        <div className='bought-items-list-header'>
            <h2>Bought Items List</h2>
        </div>
        <div>
            {itemsList.map(item => 
                <BoughtItem key={item.id} item={item} />
            )}
        </div>
        <div className='bought-items-list-total'>
            <span>TOTAL: ${total}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    itemsList: selectItemsList,
    total: selectItemsListTotal
})

export default connect(mapStateToProps)(BoughtItemsList);