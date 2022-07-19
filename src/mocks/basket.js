import logo from '../../assets/logo.png';
import tomato from '../../assets/frutas/Tomate.png';
import broccoli from '../../assets/frutas/Brócolis.png';
import potato from '../../assets/frutas/Batata.png';
import cucumber from '../../assets/frutas/Pepino.png';
import pumpkin from '../../assets/frutas/Abóbora.png';

const basket = {
    top: {
        title: "Basket details",
    },

    details: {
        name: "Vegetable Basket",
        farmName: "Jenny Jack Farm",
        farmLogo: logo,
        description: "A basket with carefully selected products from farm to your kitchen",
        price: "R$ 40,00",
        button: "Buy",
    },

    itens: {
        title: "Basket itens",
        list: [
          {
            name: "Tomato",
            image: tomato,
          },
          {
            name: "Broccoli",
            image: broccoli,
          },
          {
            name: "Potato",
            image: potato,
          },
          {
            name: "Cucumber",
            image: cucumber,
          },
          {
            name: "Pumpkin",
            image: pumpkin,
          }
        ]
      }
}

export default basket;