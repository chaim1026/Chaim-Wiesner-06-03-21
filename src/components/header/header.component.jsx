import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { TrueFalseHook }  from '../true-false-hook/true-false-hook.component';

const Header = () => {

    const { clicked, flipClicked } = TrueFalseHook();

    return (
    <div className='header-items'>
        <Link className='company' to='/'>
            <h3 className='company-name' onClick={flipClicked}>TRACKING APP</h3>
        </Link>
        <div id='toggle-menu' className='burger-menu' onClick={() => flipClicked(clicked)}>
            <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <div className={clicked ? 'nav-menu active' : 'nav-menu'}>
            <Link className='display-on-phone' to='/'>
                <span onClick={flipClicked}>TRACKING APP</span>
            </Link>
            <Link className='option' to='/bought-items'>
                <span onClick={flipClicked}>Bought Items</span>
            </Link>
            <Link className='option' to='/delivered-items-list'>
                <span onClick={flipClicked}>Delivered Items</span>
            </Link>
        </div>
    </div>
)};

export default Header;