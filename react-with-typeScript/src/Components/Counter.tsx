import { useState } from "react"


const Counter = () => {
const [count, setCount] = useState<number>(0);
  return (
    <div>
            <h1>Counter</h1>
            <p>count : {count}</p>

            <button onClick={() => setCount(count + 1)} > Increment  </button>
            <button onClick={() => setCount(count - 1)} > Decrement </button>

    </div>
  )
}

export default Counter
