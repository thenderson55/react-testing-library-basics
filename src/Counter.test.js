import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Counter from "./Counter";

afterEach(cleanup);

test('counter renders without error', () => {
  const { debug, getByTestId } = render(<Counter/>)
  debug()
  const counterButton = getByTestId('counter-button')

  expect(counterButton.tagName).toBe('BUTTON')
  expect(counterButton.textContent).toBe('0')

  fireEvent.click(counterButton)
  expect(counterButton.textContent).toBe('1')

});
