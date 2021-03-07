import React from 'react';
import './menu-items.styles.scss';
import { withRouter } from 'react-router-dom';
import ItemsIcon from '../items-icon/items-icon.component';

const MenuItems = ({ title, imageUrl, icon, history, linkUrl, match }) => (
    <div 
        className='menu-items' 
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div 
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='content'>
            <h1 className='title'>{title}</h1>
            {icon === true ? <ItemsIcon /> : null}
        </div>
    </div>
);

export default withRouter(MenuItems);