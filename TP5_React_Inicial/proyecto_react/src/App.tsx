
import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter"
import { MiPrimerComponent } from "./components/MiPrimerComponent/MiPrimerComponent"
import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect"
import { FromComponent } from "./components/FormComponent/FromComponent"
import { AppProduct } from "./components/AppProduct/AppProduct"
import { useState } from "react"

/**
 * Siempre debemos retornar un elemento
 * El signo <> </> sirve para encerrar todo en un elemento pero sin generar un div en el nodo
 */

export const App = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', gap:'2vh'}} >
     {/* <MiPrimerComponent
    text="Este es un componente"
    color="red"
    fontSize={5}
    />
    <ComponentCounter />
    <ComponentUseEffect /> */}
    {/*<FromComponent />*/}
    <AppProduct  />
    </div>
  )
}

//  import { useState } from "react"
//  const [enableContent, setEnableContent] = useState(false) <- Esto iría antes del return
//    {//enableContent && <ComponentCounter/>}
//   <button onClick={() => {
//        setEnableContent(!enableContent); /*Con esto podemos montar o desmontar un elemento*/
//    }}>Mostrar/Ocultar Counter</button>}