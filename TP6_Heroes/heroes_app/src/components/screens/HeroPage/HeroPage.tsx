import { useEffect, useState } from "react"
import { IHeroes } from "../../../types/Heroes";
import { heroesData } from "../../../data/heroes";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./HeroPage.module.css"
import { Button } from "react-bootstrap"

export const HeroPage = () => {
    const [hero, setHero] = useState<IHeroes | null>(null);
    const { id } = useParams();

    const getHeroById = () => {
        const result = heroesData.find((h) => h.id === id);
        result ? setHero(result) : setHero(null);
    };

    useEffect(() => {
        getHeroById();
    }, []);
    //Con esto retorna a la página anterior 
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(-1);
    }

    return (
        <>
            {
                hero && <div className={styles.containerHeroPage}>
                    <div className={styles.containerImgHeroPage}>
                        <img src={`/assets/heroes/${id}.jpg`} ></img>
                    </div>
                    <div>
                        <h3>{hero.superhero}</h3>
                        <ul>
                            <li><b>Alter Ego:</b> {hero.alter_ego}</li>
                            <li><b>Publicador:</b> {hero.publisher}</li>
                            <li><b>Primera Aparición:</b> {hero.first_appearance}</li>
                        </ul>
                        <Button variant="primary" onClick={handleNavigate}>Regresar</Button>
                    </div>
                </div>
            }
        </>
    )
}
