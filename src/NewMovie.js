import React from 'react'
import MovieForm from './MovieForm'

function NewMovie() {
  return (
    <div data-testid="component-new-movie">
      <h2 data-testid="page-title">New Movie</h2>
      <MovieForm/>
    </div>
  )
}

export default NewMovie
