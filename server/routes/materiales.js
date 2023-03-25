import express from "express"
import * as materiales from '../services/materiales.js'

const router = express.Router()

router.post('/', async (_req, res) => {
    try {
        const results = await materiales.postMaterial(_req.body)
        console.log({results})
        if(results.result > 0){
            res.status(201).send({msg:"Material agregado correctamente....",id:results.id})
        }else{
            res.status(400).send({msg:"Error al agregar"})
        }
    } catch (error) {
        console.error(error)
        res.status(500).send({error:'Ha ocurrido un error en el servidor'+error})
    }
})

router.put('/', async (_req, res) => {
    try {
        const results = await materiales.putMaterial(_req.body)
        console.log({results})
        if(results > 0){
            res.status(200).send({msg:"Material editado correctamente...."})
        }else{
            res.status(400).send({msg:"Error al editar"})
        }
    } catch (error) {
        console.error(error)
        res.status(500).send({error:'Ha ocurrido un error en el servidor'+error})
    }
})

router.get('/', async (_req, res) => {
    try {
        const results = await materiales.getAll()
        res.send(results)
    } catch (error) {
        console.error(error)
        res.status(500).send({error:'Ha ocurrido un error en el servidor'+error})
    }
})

router.delete('/:id', async (_req, res) => {
    try {
        const results = await materiales.deleteMaterial({id: _req.params.id})
        res.send(results)
    } catch (error) {
        console.error(error)
        res.status(500).send({error:'Ha ocurrido un error en el servidor'+error})
    }
})

router.get('/:id', async (_req, res) => {
    try {
        const results = await materiales.getSingleMaterial({id: _req.params.id})
        res.status(200).send(results)
    } catch (error) {
        console.error(error)
        res.status(500).send({error:'Ha ocurrido un error en el servidor'+error})
    }
})

export default router
