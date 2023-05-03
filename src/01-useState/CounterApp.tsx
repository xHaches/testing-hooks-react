import { useState } from "react"

export const CounterApp = () => {
  
    const [{counter1, ...state}, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    });
  
    return (
    <>
        <h1>Counter: {counter1}</h1>
        <h1>Counter: {state.counter2}</h1>
        <h1>Counter: {state.counter3}</h1>
        <hr />
        <button className="btn btn-success" onClick={() => setCounter(
            {...state, counter1: counter1 + 1}
        )}>+1</button>
    </>
  )
}