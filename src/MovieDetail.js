import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { Poster } from './Movie';
import axios from 'axios'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

function MovieDetail (props) {
  const [movie, setMovie] = useState()
  // const url = `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=hi&language=en-US`
  useEffect(() => {
    let mounted = true
    const fetchData = async () => {
      try {
        const res = await axios.get(props.url);
        // const movieData = await res.json();
        if(mounted){
          setMovie(res.data)
        }
        console.log('move', res.data)
      } catch (e) {
        console.log(e);
      }
    }
    fetchData()

    return () => {
      mounted = false
    }
  }, [])

  if(!movie){
    return <span data-testid="loading">Loading data ...</span>
  }else{

  }
  return (

    <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
      <MovieInfo>
        <Overdrive id={`${movie.id}`}>
          <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
        </Overdrive>
        <div>
          <h1 data-testid="resolved">{movie.title}</h1>
          <h3>{movie.release_date}</h3>
          <p>{movie.overview}</p>
        </div>
      </MovieInfo>
    </MovieWrapper>
  );
}

export default MovieDetail;

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;