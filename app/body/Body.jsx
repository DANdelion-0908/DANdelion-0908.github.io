import React from 'react'
import styles from './Body.module.css'
import Screen from '../screen/Screen'
import Button from '../buttons/Button'

const Body = () => {
    const buttons = [1, 2, 3, "*", 4, 5, 6, "-", 7, 8, 9, "*", 0, "="]

    const operators = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div className={styles.Body}>
        <h1><strong>Dan's calculator</strong></h1>
        <Screen operators={operators}/>
        <div className={styles.Buttons}>
            {buttons.map((symbol, index) => {
                return(
                    <Button symbol={symbol} key={index}/>
                )
            })}

        </div>
    </div>
  )
}

export default Body