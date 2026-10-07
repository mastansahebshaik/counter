import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>Counter App</h1>
      <p className="count">{count}</p>
      <div className="buttons">
        <button onClick={() => setCount(count - 1)}>- Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>+ Increase</button>
      </div>
    </div>
  )
}
