import React, { useState } from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    
    const [clicked, setClicked] = useState(false);

    const openBurgerMenu = (status) => {
        setClicked(!status)
    };

    return (
    <div className='header-items'>
        <Link className='company' to='/' onClick={() => openBurgerMenu(clicked)}>
            <h3 className='company-name'>TRACKING APP</h3>
        </Link>
        <div className='burger-menu' onClick={() => openBurgerMenu(clicked)}>
            <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <div className={clicked ? 'nav-menu active' : 'nav-menu'}>
            <Link className='option' to='/bought-items' onClick={() => openBurgerMenu(clicked)}>
                Bought Items
            </Link>
            <Link className='option' to='/delivered-items-list' onClick={() => openBurgerMenu(clicked)}>
                Delivered Items
            </Link>
        </div>
    </div>
)};

export default Header;