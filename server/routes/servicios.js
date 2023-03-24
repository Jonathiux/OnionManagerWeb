import express from "express"
import * as productoServices from '../services/servicios.js'

const router = express.Router()

router.get('/', async (_req, res) => {
    try {
        const results = await productoServices.getAll()
        res.send(results)
    } catch (error) {
        console.error(error)
        res.status(500).send('Ha ocurrido un error en el servidor')
    }
})

router.post('/',async(_req,res) => {
    try {
        const results = await productoServices.crearServicio(_req.body)
        if (results > 0) {
            console.log("Se ha insertado una fila en la tabla")
            res.status(201).send('Se ha insertado una fila en la tabla')
        } else {
            console.log("No se ha insertado ninguna fila en la tabla")
            res.status(400).send("No se ha insertado ninguna fila en la tabla")
          }
        console.log(results.affectedRows)
    } catch (error) {
        console.error(error)
        res.status(500).send('Ha ocurrido un error en el servidor')
    }
})

export default router
