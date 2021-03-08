import React from 'react';
import './store-info.styles.scss';

const StoreInfo = ({ store }) => (
    <div className='store-info'>
        <div className='store-name'>{(store.onlineStore).toUpperCase()}</div>
        <div>{store.sum}$</div>
    </div>
);

export default StoreInfo;