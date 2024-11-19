import { useEffect, useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { IHeroes } from "../../../types/Heroes";
import { heroesData } from "../../../data/heroes";
import { Form, InputGroup } from "react-bootstrap";
import { CardHero } from "../../ui/CardHero/CardHero";
import styles from "./Search.module.css";

export const Search = () => {
    const { values, handleChange } = useForm({
        search: "",
    });

    const { search } = values;

    const [heros, setHeros] = useState<IHeroes[]>([]);

    useEffect(() => {
        const result = heroesData.filter((h) => 
            h.superhero.toLowerCase().trim().includes(search)
        );
        setHeros(result);
    }, [search]);

    return (
        <div className={styles.containerSearch}>
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Ingrese heroes:</InputGroup.Text>
                    <Form.Control onChange={handleChange} type="text" name="search" />
                </InputGroup>
            </div>
            <div className={styles.containerListHeros}>
                {heros.length > 0 ? (
                    <>
                        <div style={{width : '80%'}}>
                            {heros.map((hero) => (
                                <div key={hero.id} style={{width : '80%'}}>
                                    <CardHero hero={hero} />
                                </div>
                            ))}
                        </div>
                    </>
                    ) : (
                        <div>
                            <h2>La busqueda no coincide</h2>
                        </div>
                    )}
            </div>
        </div>
    )
}
