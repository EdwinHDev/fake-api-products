import express from "express"
import { getProducts, getProductById, createProduct } from "../controllers/productsController.js"

const router = express.Router()

router.get("/", getProducts)
router.post("/", createProduct)
router.get("/:id", getProductById)

export default router