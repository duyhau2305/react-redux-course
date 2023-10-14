import { useState } from 'react'

function App() {
  // state
  const [count, setCount] = useState(0);

  // actions
  function increment() {
    setCount((count) => count + 1)
  }

  // view
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={increment}>
          count is {count}
        </button>
      </div>
      
    </>
  )
}

export default App
