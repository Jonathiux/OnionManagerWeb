import express from "express"
import * as usuarios from '../services/usuarios.js'

const router = express.Router()

router.post('/login', async (_req, res) => {
    try {
        const results = await usuarios.login(_req.body)
        if(results.length > 0){
            res.send({id:results[0].IDUsuario,tipo:results[0].TipoUsuario})
        }else{
            res.status(403).send({error:"Usuario o contraseña incorrectos"})
        }
    } catch (error) {
        console.error(error)
        res.status(500).send({error:'Ha ocurrido un error en el servidor'+error})
    }
})

router.post('/', async (_req, res) => {
    console.log(_req.body)
    try {
        const results = await usuarios.postUsuario(_req.body)
        if(results > 0){
            res.send({msg:'Usuario Creado exitosamente'})
        }else{
            res.status(403).send({error:"Error al crear usuario"})
        }
    } catch (error) {
        console.error(error)
        res.status(500).send({error:'Ha ocurrido un error en el servidor'+error})
    }
})

router.get('/:idUsuario',async (_req,res)=>{
    try {
        const results = await usuarios.getSingleUsuario({idUsuario: _req.params.idUsuario})
        res.send(results)
    } catch (error) {
        console.error(error)
        res.status(500).send({error:'Ha ocurrido un error en el servidor'+error})
    }
})

export default router
