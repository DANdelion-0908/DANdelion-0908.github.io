import { describe, expect, test, vi } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"

import Screen from "../app/screen/Screen"
import Button from "../app/buttons/Button"
import Body from "../app/body/Body"

import React from "react"
import { redirect } from "next/dist/server/api-utils"

describe("Button", () => {
    test("renders correctly with symbol", () => {
        const testSymbol = 1
        render(<Button symbol={testSymbol} handleButtonPress={() => {}} />)
        expect(screen.getByText(testSymbol)).toBeDefined()
    })

    test("calls handleButtonPress on click with number", () => {
        const handleButtonPress = vi.fn()
        const testSymbol = 1
        render(<Button symbol={testSymbol} handleButtonPress={handleButtonPress} />)
        fireEvent.click(screen.getByText(testSymbol))
        expect(handleButtonPress).toHaveBeenCalledTimes(1)
        expect(handleButtonPress).toHaveBeenCalledWith(testSymbol)
    })

    test("calls handleButtonPress on click with operator", () => {
        const handleButtonPress = vi.fn()
        const testSymbol = "+"
        render(<Button symbol={testSymbol} handleButtonPress={handleButtonPress} />)
        fireEvent.click(screen.getByText(testSymbol))
        expect(handleButtonPress).toHaveBeenCalledTimes(1)
        expect(handleButtonPress).toHaveBeenCalledWith(testSymbol)
    })
})

describe("Screen", () => {
    test("renders output correctly", () => {
        const testNumber = [5]
        render(<Screen operators={testNumber} />)
        expect(screen.getByText(testNumber)).toBeDefined()
    })
})

describe("Body", () => {
    test("calls getTotal and returns an answer", () => {
      render(<Body />)
      const testButton1 = 6
      const testButton2 = "+"
      const testButton3 = 9
      const testButton4 = "="
      fireEvent.click(screen.getByText(testButton1))
      fireEvent.click(screen.getByText(testButton2))
      fireEvent.click(screen.getByText(testButton3))
      fireEvent.click(screen.getByText(testButton4))
      expect(screen.getByText(15)).toBeDefined()
    })
  })
