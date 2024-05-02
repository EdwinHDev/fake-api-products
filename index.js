import express from "express"
import cors from "cors"
import productRoutes from "./routes/productRoutes.js"
import uploadRoutes from "./routes/uploadRoutes.js"
import mainRoutes from "./routes/mainRoutes.js"
import fileUpload from "express-fileupload"

const app = express()
app.use(express.json())

app.use(cors())

app.use(fileUpload({
  createParentPath: true
}))

app.use('/', mainRoutes)
app.use('/api/products', productRoutes)
app.use('/api/upload', uploadRoutes)

app.use(express.static('public'))
app.use(express.static('uploads'))

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
});

export default app