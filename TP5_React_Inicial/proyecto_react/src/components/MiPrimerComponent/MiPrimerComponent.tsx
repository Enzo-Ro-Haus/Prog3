import { FC } from "react"

interface IPropsMiPrimerComponent{
    text : string
    color: string
    fontSize? : number /*Signo de pregunta para aclarar que no es necesario*/
}

/**
 * Se puede observar un || 2 eso significa que si fontSize no tiene valor se le pone 2 por defecto 
 * Los componentes tienen que ser de app.
*/
export const MiPrimerComponent: FC <IPropsMiPrimerComponent> = ({text, color, fontSize}) => {
  return (
    <div style={{color: `${color}`, fontSize: `${fontSize || 2}rem`}}> 
        <p>{`${text}`}</p>
    </div>
  )
}
