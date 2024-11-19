import { useEffect, useState } from "react"
import { IHeroes } from "../../../types/Heroes";
import { heroesData } from "../../../data/heroes";
import { ListHeroes } from "../../ui/ListHeroes/ListHeroes";

export const DCHeroes = () => {
    const [heroes, setHeroes] = useState<IHeroes[]>([]);
    const handleGetHeroesDC = () => {
        const result = heroesData.filter((hero) => hero.publisher === "DC Comics");
        setHeroes(result);
    }
    //Esta funcion se ejecuta cuando se carga el elemento, trae todos los heroes de DC
    useEffect(()=>{
        handleGetHeroesDC();
    },[])

    return (
        <ListHeroes heroes={heroes} title="Heroes DC Comics"/>   
    )
}
