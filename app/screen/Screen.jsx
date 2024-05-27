import React from 'react'
import styles from './Screen.module.css'

const Screen = ({ operators }) => {
  return (
    <div className={styles.screen}>
        {operators.map((operator, index) => {
            return(
                <h1 key={index} className={styles.operators}>{operator}</h1>
            )
        })}
    </div>
  )
}

export default Screen