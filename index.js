import express from "express"
import dotenv from "dotenv"
import productRoutes from "./routes/productRoutes.js"
import mainRoutes from "./routes/mainRoutes.js"

const app = express()
app.use(express.json())

dotenv.config()

app.use('/', mainRoutes)
app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
});