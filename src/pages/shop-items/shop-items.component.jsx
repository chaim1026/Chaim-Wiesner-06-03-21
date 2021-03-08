import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ItemsCollection from '../../components/items-collection/items-collection.component';
import { selectCollections } from '../../redux/shop/shop.selectors';

const ShopItems = ({ collections }) => (
    <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps}) => (
            <ItemsCollection key={id} {...otherCollectionProps} />
        ))}
    </div>
);


const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(ShopItems);