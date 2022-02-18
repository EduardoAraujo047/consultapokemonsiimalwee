import { Container, Form, Background, Pokemons, Descricao, Pokedex } from "./styles";
import api from '../../services/api';
import bgPoke from '../../images/p.png';
import { useState, FormEvent } from "react";

interface PokeProps {
    id: string;

    abilities: [
        {
            ability: {
                name: string;
            }
        },
        {
            ability: {
                name: string;
            }
        }
    ]

    forms:[ 
        {
            name: string;
        }
    ]

    sprites: {
        front_default: string;
    };

    types:[
        {
            type:{
                name: string;
            }
        },
        {
            type:{
                name: string;
            }
        }
    ]

}

const Dashboard: React.FC = () => {   
    const [newPoke, setNewPoke] = useState('');
    const [pokes, setPoke] = useState<PokeProps[]>([]);

    const pesquisarPoke = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await api.get(`${newPoke}`);
            const pokeDados = response.data;

            setPoke([...pokes, pokeDados])

            console.log(pokes);
        } catch(err){

        }
    };


    return (
        <Container>
            <Background>
                <img src={bgPoke} />
                <Form onSubmit={pesquisarPoke}>
                    <input type="text" placeholder="Busque por um Pokémon" onChange={e => setNewPoke(e.target.value)} />
                    <button type="submit">Buscar</button>    
                </Form>
            </Background>

                <Pokemons>
                    {pokes.map(poke => (
                        <a href="#">
                            <Pokedex><p>#{poke.id}</p></Pokedex>
                            <img src={poke.sprites.front_default} />
                            <Descricao>
                                <strong>{poke.forms[0].name.toUpperCase()}</strong>
                                <p>{poke.types[0].type.name.charAt(0).toUpperCase() + poke.types[0].type.name.slice(1)}</p>
                                <p>{poke.abilities[1].ability.name.charAt(0).toUpperCase() + poke.abilities[1].ability.name.slice(1)}</p>
                            </Descricao>
                        </a>
                    ))}

                </Pokemons>        
        </Container>  
    );
}

export default Dashboard;