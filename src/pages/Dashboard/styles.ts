import styled from 'styled-components';

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
        margin-left: 10px;
    }
`;

export const Form = styled.form`
    margin-top: 20px;
    max-width: 700px;

    display: flex;

    input{
        flex: 1;
        font-family: "JetBrains Mono", monospace;
        font-weight: bold;
        height: 50px;
        padding: 0 25px;
        border: none;
        border-radius: 50px;
        color: #3a3a3a;
        box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px   ;
        transition: background-color 0.2s;
    }

    button {
        margin-left: 10px;
        align-items: center;
        appearance: none;
        background-color: #f6eb49;
        border-radius: 25px;
        border-width: 0;
        box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#c5be53 0 -3px 0 inset;
        box-sizing: border-box;
        color: #36395A;
        cursor: pointer;
        display: inline-flex;
        font-family: "JetBrains Mono", monospace;
        font-weight: bold;
        width: 150px;
        height: 50px;
        justify-content: center;
        line-height: 1;
        list-style: none;
        overflow: hidden;
        padding-left: 16px;
        padding-right: 16px;
        position: relative;
        text-align: left;
        text-decoration: none;
        transition: box-shadow .15s,transform .15s;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        white-space: nowrap;
        will-change: box-shadow,transform;
        font-size: 18px;

        &:focus {
            box-shadow: #c5be53 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #c5be53 0 -3px 0 inset;
        }

        &:hover {
            box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #c5be53 0 -3px 0 inset;
            transform: translateY(-2px);
        }

        &:active {
            box-shadow: #c5be53 0 3px 7px inset;
            transform: translateY(2px);
        }
    }
`;

export const Pokemons = styled.div`
    margin-top: 20px;
    justify-content: center;
    max-width: 795px;
    display: flex;
    
    flex-direction: row;
    flex-wrap: wrap;
    
    
    a {        
        display: block;
        height: 300px;
        margin-right: 15px;
        margin-bottom: 15px;
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
            margin-top: -30px;
            margin-bottom: 20px;
            image-rendering: pixelated;
            width: 200px;
            height: 200px;
        }

    }
`;

export const Descricao = styled.div`
    margin-top: -50px;
    padding: 8px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;


    strong {
        font-size: 20px;
        color: #000;
    }

    p {
        display: inline;
        font-size: 18px;
        color: #303030;
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

    #pokebola {
        max-width: 32px;
        max-height: 32px;

        margin-left: 81%;
        margin-top: -20px;
    }
`;

export const Error = styled.span`
    display: block;
    color: #c53030;
    font-family: "JetBrains Mono", monospace;
    font-style: italic;
    font-weight: bold;
    margin-top: 5px;
    margin-left: 10px;
`;