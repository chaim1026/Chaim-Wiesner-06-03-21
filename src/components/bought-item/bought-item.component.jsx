import React from 'react';
import { connect } from 'react-redux';
import { itemDelivered } from '../../redux/items/items.actions';
import { addToDelivered } from '../../redux/delivered-items/delivered-items.actions';
import './bought-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const BoughtItem = ({ item, itemWasDelivered, toDelivered }) => {
    const { imageUrl, name, quantity, onlineStore, deliveryDate, price} = item;
    return (
    <div className='bought-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <div className='info-container'>
            <span className='name'>{name}</span>
            <span className='amount'>x {quantity}</span>
            <span className='online-store'>{onlineStore}</span>
            <span className='est-delivery'>{deliveryDate}</span>
        </div>
        <div className='price-btn'>
            <span className='price'>{price}$</span>
            <CustomButton onClick={() => {itemWasDelivered(item); toDelivered(item)}}> Item Delivered </CustomButton>
        </div>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    itemWasDelivered: item => dispatch(itemDelivered(item)),
    toDelivered: item => dispatch(addToDelivered(item))
})

export default connect(null, mapDispatchToProps)(BoughtItem);