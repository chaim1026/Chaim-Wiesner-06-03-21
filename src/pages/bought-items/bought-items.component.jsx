import React, { useState } from 'react';
import './bought-items.styles.scss';
import Directory from '../../components/directory/directory.components';
import { Tabs, Tab } from '@material-ui/core';
import BoughtItemsList from '../bought-items-list/bought-items-list.component';
import ItemsIcon from '../../components/items-icon/items-icon.component';

const BoughtItems = (props) => {
    const { match, history } = props;
    const { params } = match;
    const { page } = params;

    const tabNameToIndex = {
        0: "items",
        1: "stores"
      };
    
      const indexToTabName = {
        items: 0,
        stores: 1
      };
    const [selectedTab, setSelectedTab] = useState(indexToTabName[page]);

    const handleChange = (event, newValue) => {
        history.push(`/bought-items/${tabNameToIndex[newValue]}`);
        setSelectedTab(newValue);
    };
    
    return (
    <div className='bought-items'>
        {/* <Directory /> */}


        <Tabs value={selectedTab} onChange={handleChange}>
            <Tab label={<ItemsIcon/>} />
            <Tab label='Stores List' />
        </Tabs>

        {selectedTab === 0 && <BoughtItemsList />}
    
    </div>
)};

export default BoughtItems;