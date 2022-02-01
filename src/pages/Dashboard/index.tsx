import React from "react";
import { Container, Title, Form, Background } from "./styles";

const Dashboard: React.FC = () => {
    return (
        <Container>
            <Background>
                <Title>Pesquise endereços por CEP</Title>

                <Form>
                    <input type="text" placeholder="Digite seu CEP" />
                    <button type="submit">Buscar</button>    
                </Form>
            </Background>
        </Container>
    );
}

export default Dashboard;