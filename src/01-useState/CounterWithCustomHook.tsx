import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>Counter with Hook: { counter }</h1>
            <hr />
            <button className="btn btn-primary" onClick={(_) => increment(2)}>+1</button>
            <button className="btn btn-primary" onClick={reset}>reset</button>
            <button className="btn btn-primary" onClick={(_) => decrement(4)}>-1</button>
        </>
    )
}
