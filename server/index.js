import express from "express"
import cors from "cors"
import morgan from "morgan"

import { PORT } from "./config.js"
import servicios from "./routes/servicios.js"
import materiales from "./routes/materiales.js" 
import usuarios from "./routes/usuarios.js" 

const app = express()

app.use(cors())
app.use(morgan('dev'))

app.use(express.json())

app.get('/ping', (_req, res) => {
    console.log('someone pinged here!!')
    res.send('pong')
})

app.use('/api/servicios', servicios)

app.use('/api/materiales', materiales)

app.use('/api/usuarios',usuarios)

app.use((_request, respons) => {
    respons.status(404).json({
        error: 'Not fund'
    })
})

app.listen(PORT)
console.log(`Servidor iniciado en el puerto ${PORT}`)