import { URL } from "./config"

const apiURL = `${URL}/usuarios`

class Usuario {

    constructor({ IDUsuario=null, Nombre=null, Apellidos=null, Telefono=null, Username=null, Contrasena=null, TipoUsuario=null }) {
        this._IDUsuario = IDUsuario
        this._Nombre = Nombre
        this._Apellidos = Apellidos
        this._Telefono = Telefono
        this._Username = Username
        this._Contrasena = Contrasena
        this._TipoUsuario = TipoUsuario
    }

    set IDUsuario(newIDUsuario){
        this._IDUsuario = newIDUsuario
    }
    get IDUsuario(){
        return this._IDUsuario
    }
    set Nombre(newNombre){
        this._Nombre = newNombre
    }
    get Nombre(){
        return this._Nombre
    }
    set Apellidos(newApellidos){
        this._Apellidos = newApellidos
    }
    get Apellidos(){
        return this._Apellidos
    }
    set Telefono(newTelefono){
        this._Telefono = newTelefono
    }
    get Telefono(){
        return this._Telefono
    }
    set Username(newUsername){
        this._Username = newUsername
    }
    get Username(){
        return this._Username
    }
    set Contrasena(newContrasena){
        this._Contrasena = newContrasena
    }
    get Contrasena(){
        return this._Contrasena
    }
    set TipoUsuario(newTipoUsuario){
        this._TipoUsuario = newTipoUsuario
    }
    get TipoUsuario(){
        return this._TipoUsuario
    }

    //----------------------------------------------------------------
    //----------obtener info del usuario------------------
    //----------------------------------------------------------------
    getUsuario(u = new Usuario({})){
        return fetch(`${apiURL}/${u.IDUsuario}`,{
            method:'GET'
        })
        .then(resp => resp.json())
        .then(resp => { return resp })
    }
    //----------------------------------------------------------------
    //----------Crear nuevo usuario------------------
    //----------------------------------------------------------------
    postUsuario(u = new Usuario({})) {

        return fetch(apiURL, {
            method: 'POST',
            body: JSON.stringify(u),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(resp => { return resp })
    }
    //----------------------------------------------------------------
    //----------Validar usuario------------------
    //----------------------------------------------------------------
    login(u = new Usuario({})) {

        return fetch(`${apiURL}/login`, {
            body: JSON.stringify({
                username : u.Username,
                password: u.Contrasena
            }),// body data type must match "Content-Type" header
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            // mode: 'cors', // no-cors, *cors, same-origin
            // cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'include', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin':'*' 
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            // redirect: 'follow', // manual, *follow, error
            // referrerPolicy: 'origin-when-cross-origin' // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url

        })
            .then(resp => resp.json())
            .then(resp => {return resp})
            .catch()
    }
}

export default Usuario