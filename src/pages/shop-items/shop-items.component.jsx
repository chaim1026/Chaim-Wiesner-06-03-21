import React from 'react';

import SHOP_DATA from './shop-items.data';
import ItemsCollection from '../../components/items-collection/items-collection.component';

class ShopItems extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({ id, ...otherCollectionProps}) => (
                        <ItemsCollection key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopItems;