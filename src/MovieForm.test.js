import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import MovieForm from "./MovieForm";


// create a spy/mock 
const onSubmit = jest.fn();

afterEach(cleanup);

describe("submit", () => {
  // to block js-dom errors
  let emit;

  beforeAll(() => {
    ({ emit } = window._virtualConsole);
  });

  beforeEach(() => {
    window._virtualConsole.emit = jest.fn();
  });

  afterAll(() => {
    window._virtualConsole.emit = emit;
  });

  test("should render MovieForm without error", () => {
    const {
      getByTestId,
      debug,
      queryByTestId,
      getByText,
      getByLabelText
    } = render(<MovieForm submitForm={onSubmit} />);
    debug();

    expect(queryByTestId("movie-form")).toBeTruthy();

    fireEvent.change(getByLabelText("Text"), { target: { value: "hello" } });

    fireEvent.click(getByText("Submit"));

    // check that it has been run after click/change
    expect(onSubmit).toHaveBeenCalledTimes(1);
    // check that it has been run with the correct information
    expect(onSubmit).toHaveBeenCalledWith("hello");
  });
});
