import React, { useEffect, useState } from 'react';
import './currencies.styles.scss';
import axios from 'axios'
import DropdownMenu from '../dropdown-menu/dropdown-menu.component';
import ErrorMessage from '../error-message/error-message.component';

const Currencies = ({ total }) => {

    const [currencies, setCurrencies] = useState([]);
    const [error, setError] = useState('')

    const getCurrencies = async () => {
        try {
            const userCurrencies = await
            axios.get("https://api.exchangeratesapi.io/latest?base=USD")
            const { rates } = userCurrencies.data;
            const ratesList = [];
            for (const [symbol, rate] of Object.entries(rates)) {
                ratesList.push({symbol, rate})
            }
            setCurrencies(ratesList)
        } catch (err) {
            setError(err.message)
        }
    };

    useEffect(() => {
        getCurrencies()

        const interval = setInterval(() => {
            getCurrencies()
        }, 10000)

        return () => clearInterval(interval)

    }, [])


    return (
        <div className='currencies'>
            {total !== 0 && error === '' ? <DropdownMenu currencies={currencies} total={total} /> : null}
            {error ? <ErrorMessage messages={error} /> : null}
        </div>
    )
}

export default Currencies;