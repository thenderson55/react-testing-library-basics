import React from "react";
import { render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Movie from "./Movie";

afterEach(() => {
  cleanup
  console.error.mockClear()
});

console.error = jest.fn();
test("render movie", () => {
  // it will throw an error if there are no props
  render(<Movie />);
  expect(console.error).toHaveBeenCalled();
});

const movie = {
  id: "2",
  title: "King Kang",
  poster_path: "jdiwojed.jpg"
};

test("render movie", () => {
  render(
    // have to wrap Link in something
    <MemoryRouter>
      <Movie movie={movie} />
    </MemoryRouter>
  );
  expect(console.error).not.toHaveBeenCalled();
});
