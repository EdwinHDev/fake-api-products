import { products } from "../API_DATA/products.js"
import { shuffle } from "../utils/shuffle.js"

export const getProducts = async (req, res) => {
  const ramdomProducts = shuffle(products);
  res.json(ramdomProducts)
}