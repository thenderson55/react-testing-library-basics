import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";
import MovieDetail from "./MovieDetail";
import "@testing-library/jest-dom/extend-expect";
// axios will detect the __mocks__ folder and use the mock
// https://www.youtube.com/watch?time_continue=4&v=Ngj2f1n9pUw - tutorial!
import axiosMock from "axios";

afterEach(() => {
  cleanup;
  // console.error.mockClear();
});
const match = {
  params: {
    id: "ihiu"
  }
};

it("fetches and displays data", async () => {
  axiosMock.get.mockResolvedValueOnce({
    data: {
      id: "hpo",
      title: "LLLL",
      backdrop_path: "ohoefh"
    }
  });
  const url = "/movie";
  const { getByTestId } = render(<MovieDetail url={url} match={match} />);
  expect(getByTestId("loading")).toHaveTextContent("Loading data ...");

  const resolvedStuff = await waitForElement(() => getByTestId("resolved"))

  expect(resolvedStuff).toHaveTextContent("LLLL")
  expect(axiosMock.get).toHaveBeenCalledTimes(1)
  expect(axiosMock.get).toHaveBeenCalledWith(url)
});

// global.fetch = require('jest-fetch-mock')

// console.error = jest.fn();

// test('MovieDetail compoennt should render', async () => {
//   fetch.mockResponseOnce(JSON.stringify({

//       id: 'hpo',
//       title: 'LLLL',
//       backdrop_path: 'ohoefh'

//   }))
//   const { debug, getByText } = render(<MovieDetail match={match}/>)
//   await waitForElement(() => {
//     getByText('LLLL')
//   })
//   debug()
// });
