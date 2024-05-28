import { describe, expect, test, vi } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"

import Body from "../app/body/Body"

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