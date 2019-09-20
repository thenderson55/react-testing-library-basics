import React, { useState } from 'react'

function MovieForm({ submitForm }) {
  const [text, setText] = useState('')
  return (
    <div>
      <form onSubmit={() => submitForm(text)} data-testid="movie-form">
      <label htmlFor="text">
        Text
        <input type="text" id="text" onChange={e => setText(e.target.value)}/>
      </label>
      <button>Submit</button>
      </form>
    </div>
  )
}

export default MovieForm
