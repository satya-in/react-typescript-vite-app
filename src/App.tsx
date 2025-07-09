import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React + Typescript + GithubPages + Counter</h1>
      <div className="card">
        <div>{count}</div>
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((count) => count < 1 ? 0 : count - 1)}>
          Decrement
        </button>
      </div>
    </>
  )
}

export default App
