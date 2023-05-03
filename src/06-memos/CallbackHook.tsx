import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    // Memorizar funciones
    const incrementFather = useCallback(
      (value: number) => {
        // al usar useState se debe ingresar el callback para que reconozca los valores dentro del parentesis como distintos
        setCounter(v => v + value);
      },
      [],
    );

    // si hay funciones dentro de un useEffect, esa funcion se debe meter dentro de un useCallback para evitar fugas de memoria
    useEffect(() => {
    }, [incrementFather])
    

    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={incrementFather} />
        </>
    )
}
