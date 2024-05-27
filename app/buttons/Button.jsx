import React from 'react';
import styles from './Button.module.css';

const Button = ({ symbol }) => {

    function addNumber() {
        
    }

    return (
        <div className={`${styles.Button} ${symbol === 0 ? styles.ZeroButton : ''} ${symbol === "=" ? styles.EqualButton : ''}`}>
        {symbol}
        </div>
    );
    }

export default Button;
