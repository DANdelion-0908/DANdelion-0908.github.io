import { describe, expect, test, vi } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"

import Screen from "../app/screen/Screen"

import React from "react"

describe("Screen", () => {
    test("renders output correctly", () => {
        const testNumber = [5]
        render(<Screen operators={testNumber} />)
        expect(screen.getByText(testNumber)).toBeDefined()
    })
})