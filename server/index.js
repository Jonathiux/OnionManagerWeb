import express from "express"
import { PORT } from "./config.js"
import morgan from "morgan"

const app = express()

app.use(morgan('dev'))

app.listen(PORT)
console.log(`Servidor iniciado en el puerto ${PORT}`)