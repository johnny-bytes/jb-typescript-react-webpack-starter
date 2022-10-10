import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>Count: {count}</div>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>Click me</button>
      </div>
    </div>
  )
}

ReactDOM.render(<Counter />, document.getElementById('root'))
