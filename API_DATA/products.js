import { fillProductRating } from "../utils/ramdomRating.js"
import { clients, comments } from "../API_DATA/rating.js"
import dotenv from "dotenv"
import { v4 as uuidv4 } from 'uuid'

dotenv.config()

const baseUrl = process.env.BASE_URL;

export const products = [
  {
    _id: uuidv4(),
    category: "Gaming",
    characteristics: [
      {
        id: uuidv4(),
        name: "Marca",
        value: "AutoFull"
      },
      {
        id: uuidv4(),
        name: "Color",
        value: "Negro, Blanco, Gris"
      },
      {
        id: uuidv4(),
        name: "Dimensiones del producto",
        value: "20,07'D x 20,07'Ancho x 50,78'Altura pulgadas"
      },
    ],
    condition: "nuevo",
    description: "Asiento ventilado: esta silla de juego con función de ventilación y calefacción. El asiento integra dos potentes ventiladores de ventilación, y la función de ventilación ajustable de tres engranajes se combina con el asiento de cuero perforado, que reduce rápidamente la temperatura de la superficie del asiento a 78.8 ℉. En los sensuales días de verano, los asientos transpirables pueden aliviar las molestias sedentarias, reducir el sudor en la superficie del asiento, reducir la temperatura de la superficie del asiento y mejorar la comodidad.",
    freeShipping: true,
    images: [
      `${baseUrl}/images/products/61aT5JiZn2L._AC_SX679_.jpg`,
      `${baseUrl}/images/products/61qAYeKTDLL._AC_SX679_.jpg`,
      `${baseUrl}/images/products/61XoGMMxM-L._AC_SX679_.jpg`,
      `${baseUrl}/images/products/71GcjLhtdrL._AC_SX679_.jpg`,
      `${baseUrl}/images/products/81WjUKfB0IL._AC_SX679_.jpg`,
      `${baseUrl}/images/products/71372p7fLnL._AC_SX679_.jpg`
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
  },
  {
    _id: uuidv4(),
    category: "Accesorios",
    characteristics: [
      {
        id: uuidv4(),
        name: "Marca",
        value: "Fitbit"
      },
      {
        id: uuidv4(),
        name: "Fabricante",
        value: "Fitbit Inc"
      },
      {
        id: uuidv4(),
        name: "Peso",
        value: "180 Gramos"
      },
      {
        id: uuidv4(),
        name: "Color",
        value: "Negro/Grafito"
      },
      {
        id: uuidv4(),
        name: "GPS",
        value: "Built-in GPS"
      },
      {
        id: uuidv4(),
        name: "OS",
        value: "ios"
      },
    ],
    condition: "nuevo",
    description: "Diseñado para mejores resultados de fitness: puntuación de preparación diaria (1), GPS integrado y mapa de intensidad de entrenamiento, minutos de zona activa, seguimiento de actividad durante todo el día y frecuencia cardíaca 24/7, más de 40 modos de ejercicio y seguimiento automático del ejercicio",
    freeShipping: true,
    images: [
      `${baseUrl}/images/products/61CZSoSnVPL._AC_SX522_.jpg`,
      `${baseUrl}/images/products/71rINRiSQ6L._AC_SX425_.jpg`,
      `${baseUrl}/images/products/71rOdWmbM-L._AC_SX425_.jpg`,
      `${baseUrl}/images/products/71kaSV4lV7L._AC_SX425_.jpg`,
      `${baseUrl}/images/products/7145vtGf88L._AC_SX425_.jpg`,
      `${baseUrl}/images/products/61Bnhgku4zL._AC_SX425_.jpg`
    ],
    name: "Fitbit Versa 4 Fitness - Reloj inteligente con preparación diaria, GPS, frecuencia cardíaca 24/7, más de 40 modos de ejercicio, seguimiento del sueño y más, negro/grafito, talla única (bandas S y L incluidas)",
    price: 149.95,
    stock: 50,
    subCategories: [
      { name: "Reloj" }
    ],
    companyName: "Siempre lindos",
    discount: 15,
    rating: fillProductRating(clients, comments),
    status: "publicado",
  },
]