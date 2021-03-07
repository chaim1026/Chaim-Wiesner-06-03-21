import React from 'react';
import './items-collection.styles.scss';
import ItemCard from '../item-card/item-card.component';

const ItemsCollection = ({ title, items }) => (
    <div className='items-collection'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='items'>
            {items.map((item) => (
                <ItemCard key={item.id} item={item} />
            ))}
        </div>
    </div>
);

export default ItemsCollection;