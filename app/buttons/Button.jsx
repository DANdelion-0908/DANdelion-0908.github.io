'use client'

import React from 'react';
import styles from './Button.module.css';

const Button = ({ symbol, handleButtonPress }) => {
    return (
        <div onClick={() => handleButtonPress(symbol)} className={`${styles.Button} 
        ${symbol === 0 ? styles.ZeroButton : ''} 
        ${symbol === "=" ? styles.EqualButton : ''}
        ${symbol === "C" ? styles.MiscButton : ''}`}>
        {symbol}
        </div>
    );
    }

export default Button;
