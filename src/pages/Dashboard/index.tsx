import { Container, Title, Form, Background, Ceps } from "./styles";
import api from '../../services/api';
import bgMapa from '../../images/mapa.png';
import { useState, FormEvent } from "react";

interface CepProps {
    cep: string;
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
}

const Dashboard: React.FC = () => {   
    const [newCep, setNewCep] = useState('');
    const [ceps, setCep] = useState<CepProps[]>([]);

    const pesquisarCep = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await api.get(`${newCep}/json/`);
            const cepDados = response.data;

            setCep([...ceps, cepDados]);

            console.log(ceps);
        } catch(err){

        }
    };

    return (
        <Container>
            <Background>
                <Title>Pesquise endereços por CEP</Title>
                <img src={bgMapa} alt="Mapa" />
                <Form onSubmit={pesquisarCep}>
                    <input type="number" placeholder="Digite seu CEP" onChange={e => setNewCep(e.target.value)} />
                    <button type="submit">Buscar</button>    
                </Form>
            </Background>



            <Ceps>
                {ceps.map(cep => (
                    <a href="#">
                        <p className="uf">{cep.uf}</p>
                        <div>
                            <strong>{cep.localidade}</strong>
                            <p>{cep.bairro}</p>
                            <p>{cep.logradouro}</p>
                            <p>CEP: {cep.cep}</p>
                        </div>
                    </a>
                ))}

            </Ceps>

        </Container>  
    );
}

export default Dashboard;