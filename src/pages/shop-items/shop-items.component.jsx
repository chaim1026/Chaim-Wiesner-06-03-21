import React from 'react';
import { connect } from 'react-redux';
import ItemsCollection from '../../components/items-collection/items-collection.component';

const ShopItems = ({ shopProducts }) => (
    <div className="shop-page">
        {shopProducts.map(({ id, ...otherCollectionProps}) => (
            <ItemsCollection key={id} {...otherCollectionProps} />
        ))}
    </div>
);


const mapStateToProps = (state) => ({
    shopProducts: state.products.allProducts
});

export default connect(mapStateToProps)(ShopItems);