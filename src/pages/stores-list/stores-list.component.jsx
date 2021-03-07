import React from 'react';
import './stores-list.styles.scss';
import { connect } from 'react-redux';
import StoreInfo from '../../components/store-info/store-info.component';

const StoresList = ({ storesList }) => {
    console.log(storesList)
    return (
    <div>
        {
            storesList.map((store, index) => (
                <StoreInfo key={index} store={store} />
            ))
        }
    </div>
)};

const mapStateToProps = (state) => ({
    storesList: state.stores.storesList
});

export default connect(mapStateToProps)(StoresList);