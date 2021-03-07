import React from 'react';
import './dropdown-menu.styles.scss';


const DropdownMenu = ({ currencies, total }) => {
    return (
        <div className='drop-component'>
        
            <div className='drop-wrapper'>
                <label htmlFor='btn' className='car-dropdown-button'>Currencies
                    <span className='fas fa-chevron-down'></span>
                </label>
                <input className='car-drop-input' type='checkbox' id='btn'></input>
                <ul className='menu'>
                        {currencies.map((currency, index) => (
                            <li htmlFor='btn-2' className='first' key={index}>{currency.symbol} - {(currency.rate * total).toFixed(3)}</li>
                        ))}
                </ul>
            </div>
        </div>
    )
}

export default DropdownMenu;