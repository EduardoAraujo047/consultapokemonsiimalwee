import styled from 'styled-components';
import { shade } from 'polished';

export const Container =  styled.div`
    width: 80%;
    margin: auto;

    h6 {
        text-align: center;
    }
`;

export const Background = styled.div`

    img {
        width: 90%;
        height: 215px;
        margin-left: 30px;
    }
`;

export const Form = styled.form`
    margin-top: 20px;
    max-width: 800px;

    display: flex;

    input{
        flex: 1;
        height: 60px;
        padding: 0 25px;
        border: 2px solid #000;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        border-right: 0;
        transition: background-color 0.2s;

        &:focus {
            background: #ebebeb;
        }

    }

    button {
        width: 210px;
        height: 60px;
        background: #FFCC00;
        border-radius: 0 5px 5px 0;
        border-top: 2px solid #000;
        border-right: 2px solid #000;
        border-bottom: 2px solid #000;
        border-left: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, "#D5A100")}
        }
    }
`;

export const Pokemons = styled.div`
    margin-top: 20px;
    justify-content: center;
    max-width: 795px;
    display: flex;
    
    flex: 1; 
    flex-direction: row;
    flex-wrap: wrap;
    
    
    a {        
        display: block;
        height: 300px;
        margin-right: 15px;
        margin-bottom: 15px;
        // background-color: #fff;
        border-radius: 5px 5px 5px 5px;
        text-decoration: none;

        align-items: center;

        transition: transform 0.2s;

        &:hover {
            transform: translate(2px);
        }

        & + a {
            margin-right: 15px;
        }

        img {
            margin-top: -20px;
            margin-bottom: 20px;
            image-rendering: pixelated;
            width: 200px;
            height: 200px;
        }

    }
`;

export const Descricao = styled.div`
    margin-top: -43px;
    padding: 8px;

    strong {
        font-size: 20px;
        color: #000;
    }

    p {
        font-size: 18px;
        color: #383838;
        margin-top: 2px;
    }
`;

export const Pokedex = styled.p`
    p {
        width: 25px;
        height: 25px;

        font-size: 15px;
        color: #000;
        padding: 5px;
        margin-left: 5px;
        text-decoration: none;
    }

    img {
        max-width: 32px;
        max-height: 32px;

        margin-left: 81%;
    }
`;