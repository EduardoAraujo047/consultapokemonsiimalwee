import { createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background:  #c9c9c9;
    }

    body, input, button {
        font: 15px Roboto, sans-serif;
    }

    #root {
        max-width: 960px;
        margin: 0 auto;
        padding: 10px 20px;
    }

    button {
        cursor: pointer;
    }

    .normal {
        box-shadow: -5px 0 #A8A87880;
        background-color: #D8D8D0;
    }

    .fire {
        box-shadow: -5px 0 #F08030;
        background-color: #F8D03080;
    }

    .water {
        box-shadow: -5px 0 #6890F0;
        background-color: #98D8D880;
    }

    .grass {
        box-shadow: -5px 0 #78C850;
        background-color: #C0F86080;
    }

    .electric {
        box-shadow: -5px 0 #F8D030;
        background-color: #f8f87880;
    }

    .ice {
        box-shadow: -5px 0 #98D8D8;
        background-color: #D0F8E880;
    }

    .fighting {
        box-shadow: -5px 0 #C03028;
        background-color: #F0803080;
    }

    .poison {
        box-shadow: -5px 0 #A040A0;
        background-color: #D880B880;
    }

    .ground {
        box-shadow: -5px 0 #E0C068;
        background-color: #F8F87880;
    }

    .flying {
        box-shadow: -5px 0 #A890F0;
        background-color: #C8C0F880;
    }

    .psychic {
        box-shadow: -5px 0 #F85888;
        background-color: #F8C0B080;
    }

    .bug {
        box-shadow: -5px 0 #A8B820;
        background-color: #D8E03080;
    }

    .rock {
        box-shadow: -5px 0 #B8A038;
        background-color: #E0C06880;
    }

    .ghost {
        box-shadow: -5px 0 #705898;
        background-color: #A890F080;
    }

    .dark {
        box-shadow: -5px 0 #705848;
        background-color: #A8A87880;
    }

    .dragon {
        box-shadow: -5px 0 #7038F8;
        background-color: #B8A0F880;
    }

    .steel {
        box-shadow: -5px 0 #B8B8D0;
        background-color: #D8D8C080;
    }

    .fairy {
        box-shadow: -5px 0 #F0B6BC;
        background-color: #F5CAD180;
    }
`;