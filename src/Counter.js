import React, {useState} from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(prevCount => prevCount + 1)} data-testid="counter-button">{count}</button>
    </div>
  )
}

export default Counter
