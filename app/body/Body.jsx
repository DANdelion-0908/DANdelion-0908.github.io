'use client'

import React, { useEffect, useState } from 'react'
import styles from './Body.module.css'
import Screen from '../screen/Screen'
import Button from '../buttons/Button'

const Body = () => {
    const buttons = ["C", "Del", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", 0, "="]

    const [operators, setOperators] = useState([0])
    const [savedNumber, setSavedNumber] = useState()
    const [savedOperator, setSavedOperator] = useState()
    const [flag, setFlag] = useState(false)

    function getTotal() {
        const currentNumber = parseInt(operators.join(''))
        let result

        switch (savedOperator) {
            case "+":
                result = savedNumber + currentNumber
            break;

            case "-":
                result = savedNumber - currentNumber
            break;

            case "*":
                result = savedNumber * currentNumber
            break;
        }

        if (result < 0 || result > 999999999 || typeof savedNumber != 'number') {
            setOperators(["ERROR"])
            setSavedNumber(null)
            setSavedOperator(null)
        
        } else {
            setOperators([result])
            setSavedNumber(result)
            setSavedOperator()
        }

        setFlag(true)
    }

    const handleButtonPress = (symbol) => {
        if (typeof symbol === 'number' && operators.length < 9) {
            if (operators[0] === 0 && operators.length === 1) {
                setOperators([symbol])
            } else {
                if (flag) {
                    setOperators([symbol])
                    
                } else {
                    setOperators((prevOperators) => [...prevOperators, symbol])
                }

                setFlag(false)
            }

        } else {
            switch (symbol) {
                case "C":
                    setOperators([0])
                    setSavedNumber(null)
                    setSavedOperator(null)
                    setFlag(false)

                break

                case "Del":
                    if (operators.length > 1) {
                        setOperators((prevOperators) => prevOperators.slice(0, -1))

                    } else {
                        setOperators([0])
                    }

                break

                case "+":
                case "-":
                case "*":
                    if (savedOperator) {
                        getTotal()

                    } else {
                        setFlag(false)
                        setSavedNumber(parseInt(operators.join('')))
                        setOperators([0])
                        setSavedOperator(symbol)
                    }

                    setSavedOperator(symbol)

                break

                case "=":
                    if (savedOperator) {
                        getTotal()
                    }

                break
            }
        }
    }

  return (
    <div className={styles.Body}>
        <Screen operators={operators}/>
        <div className={styles.Buttons}>
            {buttons.map((symbol, index) => {
                return(
                    <Button symbol={symbol} handleButtonPress={handleButtonPress} key={index}/>
                )
            })}

        </div>
    </div>
  )
}

export default Body