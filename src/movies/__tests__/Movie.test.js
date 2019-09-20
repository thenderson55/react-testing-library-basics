import React from "react";
import { render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Movie, { POSTER_PATH } from "../Movie";

afterEach(() => {
  cleanup;
  console.error.mockClear();
});

console.error = jest.fn();
test("render movie component", () => {
  // it will throw an error if there are no props
  render(<Movie />);
  expect(console.error).toHaveBeenCalled();
});

const movie = {
  id: "2",
  title: "King Kang",
  poster_path: "jdiwojed.jpg"
};

test("render movie link", () => {
  const { debug, getByTestId } = render(
    // have to wrap Link in something
    <MemoryRouter>
      <Movie movie={movie} />
    </MemoryRouter>
  );
  debug();
  // don't get absolute path (.href) , just the relative path
  expect(getByTestId('movie-link').getAttribute('href')).toBe(`/${movie.id}`)
  // src to get full absolute path
  expect(getByTestId('movie-img').src).toBe(`${POSTER_PATH}${movie.poster_path}`)
  expect(console.error).not.toHaveBeenCalled();
});
