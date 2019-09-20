import React from "react";
import { render, cleanup } from "@testing-library/react";
import MovieDetail, {} from "./MovieDetail";

global.fetch = require('jest-fetch-mock')

afterEach(() => {
  cleanup;
  console.error.mockClear();
});

console.error = jest.fn();

const match = {
  params: {
    id: "ihiu"
  }
}

test('MovieDetail compoennt should render', () => {
  fetch.mockResponseOnce(JSON.stringify({
    movie: {
      id: 'hpo',
      title: 'LLLL',
      backdrop_path: 'ohoefh'
    }
  }))
  const { debug } = render(<MovieDetail match={match}/>)
  debug()
});
