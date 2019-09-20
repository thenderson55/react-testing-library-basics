import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import NewMovie from "./NewMovie";

afterEach(cleanup);

test('should render NewMovie without error', () => {
  const { getByTestId, debug, queryByTestId, container, getByText } = render(<NewMovie/>)
  debug()

  const component = getByTestId('component-new-movie')
  expect(component).toBeTruthy()

  const title = getByTestId('page-title')
  expect(title.textContent).toBe('New Movie')

  expect(queryByTestId('movie-form')).toBeTruthy()

  // expect(container.firstChild).toMatchSnapshot()

  // fireEvent.click(getByText('Submit'))
});