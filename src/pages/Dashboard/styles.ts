import styled from 'styled-components';
import { shade } from 'polished';

export const Container =  styled.div`
    width: 80%;
    margin: auto;
    border-radius: 5px 5px 5px 5px;
    box-shadow: -5px 0 darkgreen;
`;

export const Background = styled.div`
    background-image: url("https://i.blogs.es/b4dd5c/maps/1366_2000.png");
    background-position: 10% 10%;
    background-repeat: no-repeat;
    border-radius: 0 5px 6px 0;
    box-shadow: inset 0px 0px 50px 50px rgba(0,0,0,0.3);
`;

export const Title = styled.h2`
    font-size: 50px;
    color: #2b2b2b;
    max-width: 590px;
    line-height: 55px;

    padding-top: 20px;
    margin-top: 10px;
    margin-left: 40px;
`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 800px;

    display: flex;

    input{
        flex: 1;
        height: 70px;
        padding: 0 25px;
        border: 2px solid #fff;
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