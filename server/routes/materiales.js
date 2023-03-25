import express from "express"
import * as Materiales from '../services/materiales.js'

const router = express.Router()

router.post('/', async (_req, res) => {
    try {
        const results = await productoMateriales.postMaterial(_req.body)
        res.send(results)
    } catch (error) {
        console.error(error)
        res.status(500).send('Ha ocurrido un error en el servidor'+error)
    }
})

router.get('/', async (_req, res) => {
    try {
        const results = await productoMateriales.getAll()
        res.send(results)
    } catch (error) {
        console.error(error)
        res.status(500).send('Ha ocurrido un error en el servidor'+error)
    }
})

router.delete('/:id', async (_req, res) => {
    try {
        const results = await productoMateriales.deleteMaterial({id: _req.params.id})
        res.send(results)
    } catch (error) {
        console.error(error)
        res.status(500).send('Ha ocurrido un error en el servidor'+error)
    }
})

export default router
