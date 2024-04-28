import { fillProductRating } from "../utils/ramdomRating.js"
import { clients, comments } from "../API_DATA/rating.js"
import dotenv from "dotenv"

dotenv.config()

const baseUrl = process.env.BASE_URL;

export const products = [
  {
    _id: 1,
    category: "Gaming",
    characteristics: [
      {
        id: 1,
        name: "Marca",
        value: "AutoFull"
      },
      {
        id: 2,
        name: "Color",
        value: "Negro, Blanco, Gris"
      },
      {
        id: 3,
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
    _id: 2,
    category: "Accesorios",
    characteristics: [
      {
        id: 1,
        name: "Marca",
        value: "Fitbit"
      },
      {
        id: 2,
        name: "Fabricante",
        value: "Fitbit Inc"
      },
      {
        id: 3,
        name: "Peso",
        value: "180 Gramos"
      },
      {
        id: 4,
        name: "Color",
        value: "Negro/Grafito"
      },
      {
        id: 5,
        name: "GPS",
        value: "Built-in GPS"
      },
      {
        id: 6,
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
  {
    _id: 3,
    category: "Accesorios",
    characteristics: [
      {
        id: 1,
        name: "Tipo de tejido",
        value: "Cuero vegano"
      },
      {
        id: 2,
        name: "Tipo de cierre",
        value: "Cremallera"
      },
      {
        id: 3,
        name: "Marca",
        value: "KKXIU"
      },

      {
        id: 4,
        name: "Color",
        value: "Rosa"
      },
    ],
    condition: "nuevo",
    description: "3 compartimentos y amplio diseño abierto: haz que este bolso de tamaño mediano tenga una mayor capacidad y mantenga tus cosas bien organizadas y seguras. Además, te ayuda a encontrar cosas mucho más fáciles.",
    freeShipping: true,
    images: [
      `${baseUrl}/images/products/714D+F27X2L._AC_SY575_.jpg`,
      `${baseUrl}/images/products/71G6qcZ38VL._AC_SY575_.jpg`,
      `${baseUrl}/images/products/61IW-6gEUOL._AC_SY575_.jpg`,
      `${baseUrl}/images/products/71sSdX7bKeL._AC_SY575_.jpg`,
      `${baseUrl}/images/products/61G4mh-5vtL._AC_SY575_.jpg`,
      `${baseUrl}/images/products/71Z+-jbtA4L._AC_SY575_.jpg`
    ],
    name: "KKXIU Monederos y bolsos de mano con triple compartimento para mujer, bolso de mano con asa superior",
    price: 30.99,
    stock: 7,
    subCategories: [
      { name: "Carteras" }
    ],
    companyName: "Siempre lindos",
    discount: 10,
    rating: fillProductRating(clients, comments),
    status: "publicado",
  },
  {
    _id: 4,
    category: "Telefonos y Tables",
    characteristics: [
      {
        id: 1,
        name: "Marca",
        value: "SAMSUNG"
      },
      {
        id: 2,
        name: "Color",
        value: "Gris"
      },
      {
        id: 3,
        name: "Capacidad de almacenamiento de memoria",
        value: "128 GB"
      },
      {
        id: 4,
        name: "Tamaño de pantalla",
        value: "6,7 Pulgadas"
      },
    ],
    condition: "nuevo",
    description: "6.7 Quad HD+ Dynamic AMOLED 2X, pantalla Infinity-O, 525ppi, 120Hz, HDR10+, 3200x1440 píxeles, 128GB ROM, 12GB RAM, Qualcomm SM8250 Snapdragon 865 5G (7nm+), Octa-core, Adreno 650, batería de 4500mAh",
    freeShipping: false,
    images: [
      `${baseUrl}/images/products/61BgDOd6ViL._AC_SX425_.jpg`,
      `${baseUrl}/images/products/51XocCBYpGL._AC_SX425_.jpg`,
      `${baseUrl}/images/products/51sBXTFry+L._AC_SX425_.jpg`,
      `${baseUrl}/images/products/61bWUvR8tjS._AC_SX425_.jpg`, 
      `${baseUrl}/images/products/41YOmpsy2-L._AC_SX425_.jpg`,
      `${baseUrl}/images/products/51b700dO+-S._AC_SX522_.jpg`
    ],
    name: "Samsung Galaxy S20+ 5G 128GB Smartphone totalmente desbloqueado (renovado)",
    price: 199.00,
    stock: 12,
    subCategories: [
      { name: "Telefonos Inteligentes" }
    ],
    companyName: "Nanologic",
    discount: 35,
    rating: fillProductRating(clients, comments),
    status: "publicado",
  },
  {
    _id: 5,
    category: "Electrodomesticos",
    characteristics: [
      {
        id: 1,
        name: "Marca",
        value: "VIZIO"
      },
      {
        id: 2,
        name: "Resolución",
        value: "1080p"
      },
      {
        id: 3,
        name: "Aplicaciones",
        value: "Netflix, Disney+, YouTube, HBO Max"
      },
    ],
    condition: "nuevo",
    description: "Alta definición de 1080p: mira televisión con una resolución Full HD de 1080p clara y nítida y experimente una imagen brillante con la serie D de VIZIO.",
    freeShipping: true,
    images: [
      `${baseUrl}/images/products/81pL+uVYD3L._AC_SX569_.jpg`,
      `${baseUrl}/images/products/71pSYE0G7OL._AC_SX569_.jpg`,
      `${baseUrl}/images/products/71VVumHNPXL._AC_SX569_.jpg`,
      `${baseUrl}/images/products/71hbD7PcqkL._AC_SX569_.jpg`, 
      `${baseUrl}/images/products/81++w14+rkL._AC_SX569_.jpg`,
    ],
    name: "VIZIO - Smart TV Full HD 1080p de 40 pulgadas con Apple AirPlay y Chromecast integrados, compatibilidad con Alexa, D40f-J09, modelo 2022",
    price: 148.00,
    stock: 4,
    subCategories: [
      { name: "SmarTV" }
    ],
    companyName: "Directo de USA",
    discount: 15,
    rating: fillProductRating(clients, comments),
    status: "publicado",
  },
  {
    _id: 6,
    category: "Ropa",
    characteristics: [
      {
        id: 1,
        name: "Tipo de tejido",
        value: "100% poliéster"
      },
      {
        id: 2,
        name: "Cuidados",
        value: "Lavado a Máquina"
      },
    ],
    condition: "nuevo",
    description: "Overoles de manga larga para mujer 2024/cuello en V para mujer, pantalones largos, overoles de vestir con cinturón, overol de una pieza para mujer, overol casual para mujer, ropa de otoño para mujer 2024/elegantes trajes de profesor para mujer, mameluco con bolsillos",
    freeShipping: true,
    images: [
      `${baseUrl}/images/products/61dtJYCZwML._AC_SY550_.jpg`,
      `${baseUrl}/images/products/71qeUf6QEFL._AC_SY500_.jpg`,
      `${baseUrl}/images/products/71I2Gm2Y92L._AC_SY500_.jpg`,
      `${baseUrl}/images/products/71Vi99KRuhL._AC_SY500_.jpg`, 
      `${baseUrl}/images/products/81aMtAxFsIL._AC_SY500_.jpg`,
      `${baseUrl}/images/products/710x78qzpyL._AC_SY500_.jpg`,
    ],
    name: "PRETTYGARDEN Enterizo de otoño para mujer, estilo casual, elegante, de una pieza, cuello en V, manga larga, bolsillos con cinturón, pantalones largos, mameluco",
    price: 44.07,
    stock: 4,
    subCategories: [
      { name: "Lujo" }
    ],
    companyName: "Carlos Boutique",
    discount: 8,
    rating: fillProductRating(clients, comments),
    status: "publicado",
  },
  {
    _id: 7,
    category: "Accesorios",
    characteristics: [
      {
        id: 1,
        name: "Marca",
        value: "TOZO"
      },
      {
        id: 2,
        name: "Modelo",
        value: "LA1 Mini"
      },
      {
        id: 3,
        name: "Color",
        value: "Negro"
      },
      {
        id: 4,
        name: "Conectividad",
        value: "Bluetooth"
      },
    ],
    condition: "nuevo",
    description: "Ultraligeros y compatibles con orejas pequeñas: la superficie y el ángulo de la parte intrauditiva de los auriculares A1 han sido pulidos y refinados repetidamente para lograr un equilibrio entre belleza y comodidad y hacer que sean cómodos de llevar. Del mismo modo, un solo auricular pesa solo 0.13 oz, por lo que es tan ligero como una pluma y discreto en la oreja. El diseño ergonómico proporciona un ajuste cómodo y seguro que no sobresale de tus orejas, especialmente para deportes, entrenamiento, gimnasio.",
    freeShipping: true,
    images: [
      `${baseUrl}/images/products/71Sqg+w9bFL._AC_SX569_.jpg`,
      `${baseUrl}/images/products/81PETt0yg1L._AC_SX569_.jpg`,
      `${baseUrl}/images/products/61vNXwgFx-L._AC_SX569_.jpg`,
      `${baseUrl}/images/products/714hUWswHdL._AC_SX569_.jpg`, 
      `${baseUrl}/images/products/71IbFTwrC-L._AC_SX569_.jpg`,
      `${baseUrl}/images/products/71f6WD7NTJL._AC_SX569_.jpg`,
    ],
    name: "TOZO A1 Mini auriculares inalámbricos Bluetooth de 5.3 pulgadas, micrófono integrado, IPX5 impermeable, sonido inmersivo de alta calidad, conexión de larga distancia con funda de carga, color negro",
    price: 19.98,
    stock: 10,
    subCategories: [
      { name: "Audifonos" }
    ],
    companyName: "Directo de USA",
    discount: 8,
    rating: fillProductRating(clients, comments),
    status: "publicado",
  },
  {
    _id: 8,
    category: "Accesorios del Hogar",
    characteristics: [
      {
        id: 1,
        name: "Marca",
        value: "TOZO"
      },
      {
        id: 2,
        name: "Modelo",
        value: "LA1 Mini"
      },
      {
        id: 3,
        name: "Color",
        value: "Blanco y amarillo"
      },
      {
        id: 4,
        name: "Dimensiones del producto",
        value: "5,9 D x 5,9 Ancho x 5,9 Altura pulgadas"
      },
      {
        id: 5,
        name: "Características especiales",
        value: "Cambio de Color"
      },
    ],
    condition: "nuevo",
    description: "Impreso en 3D con materiales ecológicos.Toca para cambiar el color (blanco y amarillo) y ajustar el brillo. Mantén presionado para habilitar la función atenuada. Incluye una batería recargable: carga durante 2-3 horas, para un uso de 8-10 horas.",
    freeShipping: true,
    images: [
      `${baseUrl}/images/products/813cmTEIkAL._AC_SX522_.jpg`,
      `${baseUrl}/images/products/61fLipE+xSL._AC_SX425_.jpg`,
      `${baseUrl}/images/products/71ZuEVGv8jL._AC_SX425_.jpg`,
      `${baseUrl}/images/products/81j3S+HwtJL._AC_SX425_.jpg`, 
      `${baseUrl}/images/products/81esAoQ2NwL._AC_SX425_.jpg`,
      `${baseUrl}/images/products/51H6eMXJFHS._AC_SX425_.jpg`
    ],
    name: "Lámpara de mesa con forma de luna, de Mydethun, luz nocturna para niños, se carga por USB, control táctil de brillo, dos tonos uno cálido y otro blanco frío, gran idea de regalo",
    price: 50.99,
    stock: 5,
    subCategories: [
      { name: "Lamparas" }
    ],
    companyName: "Mydethun",
    discount: 5,
    rating: fillProductRating(clients, comments),
    status: "publicado",
  },
  {
    _id: 9,
    category: "Videojuegos",
    characteristics: [
      {
        id: 1,
        name: "Marca",
        value: "AMD"
      },
      {
        id: 2,
        name: "Modelo de CPU",
        value: "Ryzen 7"
      },
      {
        id: 3,
        name: "Zócalo de CPU",
        value: "Socket AM5"
      },
      {
        id: 4,
        name: "Fabricante de CPU",
        value: "AMD"
      },
    ],
    condition: "nuevo",
    description: "El procesador proporciona una ejecución confiable y rápida de tareas con la máxima eficiencia. Frecuencia de gráficos: 2200 MHZ. Número de núcleos de CPU: 8. Temperatura máxima de funcionamiento (Tjmax): 192.2 °F.",
    freeShipping: true,
    images: [
      `${baseUrl}/images/products/51HqC0rU9HL._AC_SX425_.jpg`,
      `${baseUrl}/images/products/51dOdTAF2gL._AC_SX466_.jpg`,
      `${baseUrl}/images/products/51mUlXh-JWL._AC_SX466_.jpg`,
      `${baseUrl}/images/products/61QGWxiaQ4L._AC_SX466_.jpg`, 
    ],
    name: "AMD Procesador de escritorio Ryzen 7 7800X3D de 8 núcleos y 16 hilos",
    price: 383.99,
    stock: 16,
    subCategories: [
      { name: "Procesadores" }
    ],
    companyName: "Directo USA",
    discount: 22,
    rating: fillProductRating(clients, comments),
    status: "publicado",
  },
  {
    _id: 10,
    category: "Electrodomesticos",
    characteristics: [
      {
        id: 1,
        name: "Marca",
        value: "HCK"
      },
      {
        id: 2,
        name: "Capacidad",
        value: "3,5 Pies cúbicos"
      },
      {
        id: 3,
        name: "Configuración",
        value: "Sin congelador"
      },
      {
        id: 4,
        name: "Color",
        value: "Negro"
      },
      {
        id: 5,
        name: "Características especiales",
        value: "Niseño Cyberpunk, Vidrio bajo E, Estantes ajustables"
      },
      {
        id: 6,
        name: "Voltaje",
        value: "110 Voltios"
      },
    ],
    condition: "nuevo",
    description: "El procesador proporciona una ejecución confiable y rápida de tareas con la máxima eficiencia. Frecuencia de gráficos: 2200 MHZ. Número de núcleos de CPU: 8. Temperatura máxima de funcionamiento (Tjmax): 192.2 °F.",
    freeShipping: false,
    images: [
      `${baseUrl}/images/products/71p0b362b5L._AC_SX522_.jpg`,
      `${baseUrl}/images/products/81wGlgPZHlL._AC_SX466_.jpg`,
      `${baseUrl}/images/products/71FSroKQrYL._AC_SX466_.jpg`,
      `${baseUrl}/images/products/815iief6wlL._AC_SX466_.jpg`, 
      `${baseUrl}/images/products/71R50Gd7nPL._AC_SX466_.jpg`, 
      `${baseUrl}/images/products/81ffgoB4J1L._AC_SX466_.jpg`, 
    ],
    name: "HCK Refrigerador de bebidas, Refrigerador de botellas pequeñas con iluminación moderna Cyberpunk, Mini refrigerador 32.0-50.0 °F, Nevera de cerveza 3.5 pies cúbicos, Para sala de juegos, fiesta, negro",
    price: 699.99,
    stock: 5,
    subCategories: [
      { name: "Neveras" }
    ],
    companyName: "Directo USA",
    discount: 30,
    rating: fillProductRating(clients, comments),
    status: "publicado",
  },
]