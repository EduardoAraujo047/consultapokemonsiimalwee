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

        .paragraph {
            background: #A8A87880;
            box-shadow: none;
            border-radius: 5px;
            padding: 2px 5px 2px 5px;
        }
    }

    .fire {
        box-shadow: -5px 0 #F08030;
        background-color: #F8D03080;

        .paragraph {
            background: #F08030;
            box-shadow: none;
            border-radius: 5px;
            padding: 2px 5px 2px 5px;
        }
    }

    .water {
        box-shadow: -5px 0 #6890F0;
        background-color: #98D8D880;

        .paragraph {
            background: #6890F0;
            box-shadow: none;
            border-radius: 5px;
            padding: 2px 5px 2px 5px;
        }
    }

    .grass {
        box-shadow: -5px 0 #78C850;
        background-color: #C0F86080;

        .paragraph {
            background: #78C850;
            box-shadow: none;
            border-radius: 5px;
            padding: 2px 5px 2px 5px;
        }
    }

    .electric {
        box-shadow: -5px 0 #F8D030;
        background-color: #f8f87880;

        .paragraph {
            background: #F8D030;
            box-shadow: none;
            border-radius: 5px;
            padding: 2px 5px 2px 5px;
        }
    }

    .ice {
        box-shadow: -5px 0 #98D8D8;
        background-color: #D0F8E880;

        .paragraph {
            background: #98D8D8;
            box-shadow: none;
            border-radius: 5px;
            padding: 2px 5px 2px 5px;
        }
    }

    .fighting {
        box-shadow: -5px 0 #C03028;
        background-color: #F0803080;

        .paragraph {
            background: #C03028;
            box-shadow: none;
            border-radius: 5px;
            padding: 2px 5px 2px 5px;
        }
    }

    .poison {
        box-shadow: -5px 0 #A040A0;
        background-color: #D880B880;

        .paragraph {
            background: #A040A0;
            box-shadow: none;
            border-radius: 5px;
            padding: 2px 5px 2px 5px;
        }
    }

    .ground {
        box-shadow: -5px 0 #E0C068;
        background-color: #F8F87880;

        .paragraph {
            background: #E0C068;
            box-shadow: none;
            border-radius: 5px;
            padding: 2px 5px 2px 5px;
        }
    }

    .flying {
        box-shadow: -5px 0 #A890F0;
        background-color: #C8C0F880;

        .paragraph {
            background: #A890F0;
            box-shadow: none;
            border-radius: 5px;
            padding: 2px 5px 2px 5px;
        }
    }

    .psychic {
        box-shadow: -5px 0 #F85888;
        background-color: #F8C0B080;

        .paragraph {
            background: #F85888;
            box-shadow: none;
            border-radius: 5px;
            padding: 2px 5px 2px 5px;
        }
    }

    .bug {
        box-shadow: -5px 0 #A8B820;
        background-color: #D8E03080;

        .paragraph {
            background: #A8B820;
            box-shadow: none;
            border-radius: 5px;
            padding: 2px 5px 2px 5px;
        }
    }

    .rock {
        box-shadow: -5px 0 #B8A038;
        background-color: #E0C06880;

        .paragraph {
            background: #B8A038;
            box-shadow: none;
            border-radius: 5px;
            padding: 2px 5px 2px 5px;
        }
    }

    .ghost {
        box-shadow: -5px 0 #705898;
        background-color: #A890F080;

        .paragraph {
            background: #705898;
            box-shadow: none;
            border-radius: 5px;
            padding: 2px 5px 2px 5px;
        }
    }

    .dark {
        box-shadow: -5px 0 #705848;
        background-color: #A8A87880;

        .paragraph {
            background: #705848;
            box-shadow: none;
            border-radius: 5px;
            padding: 2px 5px 2px 5px;
        }
    }

    .dragon {
        box-shadow: -5px 0 #7038F8;
        background-color: #B8A0F880;

        .paragraph {
            background: #7038F8;
            box-shadow: none;
            border-radius: 5px;
            padding: 2px 5px 2px 5px;
        }
    }

    .steel {
        box-shadow: -5px 0 #B8B8D0;
        background-color: #D8D8C080;

        .paragraph {
            background: #B8B8D0;
            box-shadow: none;
            border-radius: 5px;
            padding: 2px 5px 2px 5px;
        }
    }

    .fairy {
        box-shadow: -5px 0 #F0B6BC;
        background-color: #F5CAD180;

        .paragraph {
            background: #F0B6BC;
            box-shadow: none;
            border-radius: 5px;
            padding: 2px 5px 2px 5px;
        }
    }
`;