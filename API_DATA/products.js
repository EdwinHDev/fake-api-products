import { fillProductRating } from "../utils/ramdomRating.js"
import { clients, comments } from "../API_DATA/rating.js"

export const products = [
  {
    _id: "1",
    category: "Gaming",
    characteristics: [
      {
        id: "1",
        name: "Marca",
        value: "AutoFull"
      },
      {
        id: "2",
        name: "Color",
        value: "Negro, Blanco, Gris"
      },
      {
        id: "3",
        name: "Dimensiones del producto",
        value: "20,07'D x 20,07'Ancho x 50,78'Altura pulgadas"
      },
    ],
    condition: "nuevo",
    description: "Asiento ventilado: esta silla de juego con función de ventilación y calefacción. El asiento integra dos potentes ventiladores de ventilación, y la función de ventilación ajustable de tres engranajes se combina con el asiento de cuero perforado, que reduce rápidamente la temperatura de la superficie del asiento a 78.8 ℉. En los sensuales días de verano, los asientos transpirables pueden aliviar las molestias sedentarias, reducir el sudor en la superficie del asiento, reducir la temperatura de la superficie del asiento y mejorar la comodidad.",
    freeShipping: true,
    images: [
      `${process.env.BASE_URL}/images/61aT5JiZn2L._AC_SX679_.jpg`,
      `${process.env.BASE_URL}/images/61qAYeKTDLL._AC_SX679_.jpg`,
      `${process.env.BASE_URL}/images/61XoGMMxM-L._AC_SX679_.jpg`,
      `${process.env.BASE_URL}/images/71GcjLhtdrL._AC_SX679_.jpg`,
      `${process.env.BASE_URL}/images/81WjUKfB0IL._AC_SX679_.jpg`,
      `${process.env.BASE_URL}/images/71372p7fLnL._AC_SX679_.jpg`
    ],
    name: "AutoFull Silla de juegos M6 con cojín calefactado ventilado y seguimiento dinámico automático, soporte lumbar, silla de oficina con reposabrazos ajustables 6D, silla de PC para adultos con reposapiés",
    price: 699.99,
    stock: 8,
    subCategories: [
      { name: "Silla" }
    ],
    companyName: "El taller del computador",
    discount: 25,
    rating: fillProductRating(clients, comments),
    status: "publicado",
  }
]