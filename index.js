import express from "express"
import cors from "cors"
import productRoutes from "./routes/productRoutes.js"
import uploadRoutes from "./routes/uploadRoutes.js"
import mainRoutes from "./routes/mainRoutes.js"

const app = express()
app.use(express.json())

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));


app.use('/', mainRoutes)
app.use('/api/products', productRoutes)
app.use('/api/upload', uploadRoutes)

app.use(express.static('public'))
app.use(express.static('uploads'))
// app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
});

export default app