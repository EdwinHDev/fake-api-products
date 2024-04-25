import express from "express"
import cors from "cors"
import productRoutes from "./routes/productRoutes.js"
import mainRoutes from "./routes/mainRoutes.js"

const app = express()
app.use(express.json())

app.use(cors())

app.use('/', mainRoutes)
app.use('/api/products', productRoutes)

app.use(express.static('public'))

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
});

export default app