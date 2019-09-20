import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Movie from './Movie';
import axios from 'axios'


function MoviesList () {
  const [movies, setMovies] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          'https://api.themoviedb.org/3/discover/movie?api_key=hi&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
        );
        setMovies(res.data)
        console.log('res', res.data)
      } catch(e) {
        console.log('error', e)
      }
    }
    fetchData()
    return () => {
      
    };
  }, [])

  if(!movies){
    return <span data-testid="loading">Loading....</span>
  }
 
  return (
    <MovieGrid data-testid="movies-list">
      {movies.map(movie => <Movie data-testid="movie" key={movie.id} movie={movie} />)}
    </MovieGrid>
  );

}

export default MoviesList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;