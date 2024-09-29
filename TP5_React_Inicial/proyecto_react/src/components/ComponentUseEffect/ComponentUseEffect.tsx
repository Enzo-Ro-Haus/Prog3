import { useEffect, useState } from "react"

export const ComponentUseEffect = () => {
    const [state, setState] = useState(false)
    
    useEffect(() => {
        console.log("Estoy");
        return () => {
            console.log("Componente desmontado");
        }
    }, []) // Se va a ejecutar una vez que el elemento se haya cargado
    useEffect(() => {
        console.log(state);
    }, [state])

    return (
    <div>
        <p>{state ? "Es true" : "Es false"}</p>
        <button onClick={() => {
            setState(!state)
        }}>cambiar state</button>
    </div>
  )
}
