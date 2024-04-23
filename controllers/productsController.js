import { products } from "../API_DATA/products.js"

export const getProducts = async (req, res) => {
  res.json(products)
}