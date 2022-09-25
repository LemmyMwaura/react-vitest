import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"

// components
import Greet from "./greet"

/**
 * Greet should render the text hello and if a name is passed into the component
 * it should render hello followed by the name
 */

test("Greet renders correcty", () => {
  render(<Greet />)
  const textElement = screen.getByText(/hello/i)
  expect(textElement).toBeInTheDocument()
})

test("Greet renders with a name", () => {
  render(<Greet name="lemmy" />)
  const textElement = screen.getByText(/hello lemmy/i)
  expect(textElement).toBeInTheDocument()
})
