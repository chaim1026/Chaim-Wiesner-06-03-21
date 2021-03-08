import React from 'react';
import './error-message.styles.scss';

const ErrorMessage = ({ messages }) => (
    <div className='error-message'>
        <span>
            <i className="fas fa-exclamation-circle"></i>
        </span>
        <span>{ messages }</span>
    </div>
);

export default ErrorMessage;