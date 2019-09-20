import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";
import MoviesList from "./MoviesList";
import { MemoryRouter } from "react-router-dom";

// has extra function like toHaveTextContent
import "@testing-library/jest-dom/extend-expect";

// axios will detect the __mocks__ folder and use the mock
// https://www.youtube.com/watch?time_continue=4&v=Ngj2f1n9pUw - tutorial!
import axiosMock from "axios";

afterEach(() => {
  cleanup;
  // console.error.mockClear();
});


it("should render movies list when we get the data or loading with no data", async () => {
  axiosMock.get.mockResolvedValueOnce({
    data: [
      {
        id: "yoyo",
        title: "YOLO",
        backdrop_path: "ohoefh",
        poster_path: "jf.jpg"
      },
      {
        id: "xxxx",
        title: "Yxx",
        backdrop_path: "ohoefh",
        poster_path: "jf.jpg"
      },
      {
        id: "koko",
        title: "YOO",
        backdrop_path: "ohoefh",
        poster_path: "jf.jpg"
      },
    ]
  });
  const { getByTestId, debug, getAllByTestId, queryByTestId } = render(
    <MemoryRouter>
      <MoviesList />
    </MemoryRouter>
  );
  expect(getByTestId("loading")).toBeTruthy()

  const resolvedData = await waitForElement(() => getByTestId("movies-list"))
  // get the id from Movie component
  const movieLink = await waitForElement(() => getAllByTestId("movie-link"))
  debug();

  // it will fail if it is not there so need to use query
  // getBy assumes that it is there
  // expect(getByTestId("loading")).toBeFalsy()
  // it looked for it but didn't exist so falsy
  // query looks for it
  expect(queryByTestId("loading")).toBeFalsy()

  // const movies = await waitForElement(() => getByTestId("movie"))
  console.log('hhhh', movieLink.length)
  expect(movieLink.length).toBe(3)
  console.log('oeihrfoierh', resolvedData.children.length)
  expect(resolvedData).toBeTruthy();
  expect(resolvedData.children.length).toBe(3)
});
