import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

// components
import Greet from "./greet";

test("Greet renders correcty", () => {
  render(<Greet />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
});
