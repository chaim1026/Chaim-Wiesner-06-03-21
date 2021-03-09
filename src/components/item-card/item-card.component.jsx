import React, { useState } from 'react';
import './item-card.styles.scss';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/items/items.actions';
import { addStoreInfo } from '../../redux/stores/stores.actions';
import FlashMessage from '../flash-message/flash-message.componet';

const ItemCard = ({ item, addItem, addStoreInfo }) => {
    const { name, price, imageUrl, onlineStore, deliveryDate } = item;

    const [show, setShow] = useState(false);

    const handleClick = (item) => {
        addItem(item);
        addStoreInfo(item);
        setShow(true);
        setInterval(function(){setShow(false);},4000);
    };

    return (
    <div className='item-card'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='card-footer'>
            <div className='store-name'>
                <span className='online-store'>Online Store: {onlineStore.toUpperCase()}</span>
            </div>
            <div className='name'>
                <span className='name'>{name}</span>
            </div>
            <div>
                <span className='price'>Price: {price}$</span>
            </div>
            <div>
                <span className='delivery-date'>EST Delivery: {deliveryDate}</span>
            </div>
        </div>
        <CustomButton onClick={() => handleClick(item)} inverted > Add To Items List </CustomButton>
        {show === true ? <FlashMessage message='Item Added' /> : ''}
    </div>
)};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    addStoreInfo: item => dispatch(addStoreInfo(item)),
})

export default connect(null, mapDispatchToProps)(ItemCard);