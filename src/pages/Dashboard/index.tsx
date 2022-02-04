import React, { useState, useEffect, FormEvent } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { Container, Title, Form, Background, } from "./styles";


interface Cep {
    cep: string;
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
        
}

const Dashboard: React.FC = () => {
    const [newCep, setNewCep] = useState('');
    const [inputError,setInputError] = useState('');
    const [cep, setCep] = useState <Cep[]> (() => {
        const storageCep = localStorage.getItem(
            '@cep'
        )
        if(storageCep){
            return JSON.parse(storageCep);
        }

        return [];
    })


    const handleAddCep = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(!newCep){
            setInputError("Procure por um CEP!")
            return;
        }

        try{
            const response = await api.get(`ws/${newCep}/json`)
            const ceps = response.data;
        
            setCep([...cep, ceps])
            setNewCep('');
            setInputError('')

        }catch(err){
            setInputError("Esse CEP não foi encontrado")
        }
    }

    useEffect(() => {
        localStorage.setItem(
            '@cep',
            JSON.stringify(cep)
        )
    }, [cep])



    return (
        <>
            <Container>
                <Background>
                    <Title>Pesquise endereços por CEP</Title>

                    <Form>
                        <input type="text" placeholder="Digite seu CEP" />
                        <button type="submit">Buscar</button>    
                    </Form>
                </Background>
            </Container>

            {cep.map(cep => (
                <Link to="#">
                    <p>{cep.cep}</p>
                </Link>
            ))}
        </>
    );
}

export default Dashboard;