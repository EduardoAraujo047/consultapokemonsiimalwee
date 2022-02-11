import styled from 'styled-components';
import { shade } from 'polished';

export const Container =  styled.div`
    width: 80%;
    margin: auto;
    border-radius: 5px 5px 5px 5px;
    
`;

export const Background = styled.div`

    img {
        width: 100%;
        height: 200px;
        margin-top: -150px;
        border-radius: 5px 5px 0 0;
    }
    
    h2 {
        position: relative;
        z-index: 2;
    }
`;

export const Title = styled.h2`
    font-size: 50px;
    color: #2b2b2b;
    max-width: 590px;
    line-height: 55px;

    padding-top: 20px;
    margin-top: 30px;
    margin-left: 40px;
`;

export const Form = styled.form`
    margin-top: -5px;
    max-width: 800px;

    display: flex;

    input{
        flex: 1;
        height: 70px;
        padding: 0 25px;
        border: 2px solid #fff;
        border-radius: 0 0 0 5px;
        color: #3a3a3a;
        border-right: 0;

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        height: 70px;
        background: #04d361;
        border-radius: 0 0 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, "#04d361")}
        }
    }
`;

export const Ceps = styled.div`
    margin-top: 80px;
    max-width: 800px;
    

    a {
        box-shadow: -5px 0 darkgreen;

        display: block;
        width: 100%;
        background-color: #fff;
        border-radius: 3px 5px 5px 3px;
        padding: 22px;
        text-decoration: none;

        display: flex;
        align-items: center;

        transition: transform 0.2s;

        &:hover {
            transform: translate(5px);
        }

        & + a {
            margin-top: 15px;
        }

        .uf {
            width: 65px;
            height: 65px;
            border-radius: 50%;
            background: #04d361;
            padding: 22px;
        }

        div {
            margin: 0 15px;
            flex: 1;

            strong {
                font-size: 20px;
                color: #2b2b2b;
            }

            p {
                font-size: 18px;
                color: #474747;
                margin-top: 2px;
            }
        }
    }
`;