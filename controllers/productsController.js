import { products } from "../API/products.js"

export const getProducts = async (req, res) => {
  res.json(products)
}