import express from "express"
import * as productoMateriales from '../services/materiales.js'

const router = express.Router()

router.get('/', async (_req, res) => {
    try {
        const results = await productoMateriales.getAll()
        res.send(results)
    } catch (error) {
        console.error(error)
        res.status(500).send('Ha ocurrido un error en el servidor'+error)
    }
})

export default router
