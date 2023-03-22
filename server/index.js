import express from "express"
import { PORT } from "./config.js"
import morgan from "morgan"
import servicios from "./routes/servicios.js"
import cors from "cors"

const app = express()

app.use(cors())
app.use(morgan('dev'))

app.use(express.json())

app.get('/ping', (_req, res) => {
    console.log('someone pinged here!!')
    res.send('pong')
})

app.use('/api/servicios', servicios)

app.use((_request, respons) => {
    respons.status(404).json({
        error: 'Not fund'
    })
})

app.listen(PORT)
console.log(`Servidor iniciado en el puerto ${PORT}`)