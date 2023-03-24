import { URL } from './config.js'

const apiURL = `${URL}/materiales`

class Material {

    constructor({id = null, nombre = null, descripcion = null, cantidad = null}){
        this._id = id
        this._nombre = nombre
        this._descripcion = descripcion
        this._cantidad = cantidad
    }

    set id(newId){
        this._id = newId
    }
    get id(){
        return this._id
    }
    set nombre(newNombre){
        this._nombre = newNombre
    }
    get nombre(){
        return this._nombre
    }
    set descripcion(newDescripcion){
        this._descripcion = newDescripcion
    }
    get descripcion(){
        return this._descripcion
    }
    set cantidad(newCantidad){
        this._cantidad = newCantidad
    }
    get cantidad(){
        return this._cantidad
    }
    //----------------------------------------------------------------
    //----------Todos los Materiales para inventario------------------
    //----------------------------------------------------------------
    getMateriales(m = new Material({})) {

        return fetch(`${apiURL}`, {
            method: 'GET'
        })
            .then((res) => res.json())
            .then(this.fromAjaxResponseToProducts)
    }

    deleteMaterial(m = new Material({})){
        return fetch(`${apiURL}/${m._id}`,{
            method:'DELETE'
        })
            .then(resp=>resp.json())
            .then(this.fromAjaxResponseToProducts)
    }
}

export default Material