import { describe, expect, test, vi } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"

import Button from "../app/buttons/Button"

import React from "react"

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