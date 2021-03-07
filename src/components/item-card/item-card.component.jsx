import React from 'react';
import './item-card.styles.scss';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/items/items.actions';

const ItemCard = ({ item, addItem }) => {
    const { name, price, imageUrl, onlineStore, deliveryDate } = item;
    return (
    <div className='item-card'>
        <div className="card-header">
            <span className='online-store'>Online Store: {onlineStore}</span>
        </div>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='card-footer'>
            <div className='name-price'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <span className='delivery-date'>EST Delivery Date: {deliveryDate}</span>
        </div>
        <CustomButton onClick={() => addItem(item)} inverted > Add To Items List </CustomButton>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ItemCard);