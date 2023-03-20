import { URL } from './config.js'

const apiURL = `${URL}/servicios`

class Servicio {

    constructor({ ID = null, Folio = null, TipoServicio = null, Cantidad = null, Descripcion = null, PrecioUnitario = null, PrecioTotal = null, Anticipo = null, Observaciones = null, FechaEntrega = null, FechaSolicitado = null, FechaInicio = null, Estado = null }) {
        this._ID = ID
        this._Folio = Folio
        this._TipoServicio = TipoServicio
        this._Cantidad = Cantidad
        this._Descripcion = Descripcion
        this._PrecioUnitario = PrecioUnitario
        this._PrecioTotal = PrecioTotal
        this._Anticipo = Anticipo
        this._Observaciones = Observaciones
        this._FechaEntrega = FechaEntrega
        this._FechaSolicitado = FechaSolicitado
        this._FechaInicio = FechaInicio
        this._Estado = Estado
    }

    set id(newid) {
        this._ID = newid
    }
    get id() {
        return this._ID
    }
    set folio(newFolio) {
        this._Folio = newFolio
    }
    get folio() {
        return this._Folio
    }
    set tipoServicio(newTipoServicio) {
        this._TipoServicio = newTipoServicio
    }
    get tipoServicio() {
        return this._TipoServicio
    }
    set cantidad(newCantidad) {
        this._Cantidad = newCantidad
    }
    get cantidad() {
        return this._Cantidad
    }
    set descripcion(newDescripcion) {
        this._Descripcion = newDescripcion
    }
    get descripcion() {
        return this._Descripcion
    }
    set precioUnitario(newPrecioUnitario) {
        this._PrecioUnitario = newPrecioUnitario
    }
    get precioUnitario() {
        return this._PrecioUnitario
    }
    // this._PrecioTotal = PrecioTotal
    set precioTotal(newPrecioTotal) {
        this._PrecioTotal = newPrecioTotal
    }
    get precioTotal(){
        return this._PrecioTotal
    }
    // this._Anticipo = Anticipo
    set anticipo(newAnticipo){
        this._Anticipo = newAnticipo
    }
    get anticipo(){
        return this._Anticipo
    }
    // this._Observaciones = Observaciones
    set observaciones(newObservaciones){
        this._Observaciones = newObservaciones
    }
    get observaciones(){
        return this._Observaciones
    }
    // this._FechaEntrega = FechaEntrega
    set fechaEntrega(newFechaEntrega){
        this._FechaEntrega = newFechaEntrega
    }
    get fechaEntrega(){
        return this._FechaEntrega
    }
    // this._FechaSolicitado = FechaSolicitado
    set fechaSolicitado(newfechaSolicitado){
        this._FechaSolicitado = newfechaSolicitado
    }
    get fechaSolicitado(){
        return this._FechaSolicitado
    }
    // this._FechaInicio = FechaInicio
    set fechaInicio(newfechaInicio){
        this._FechaInicio = newfechaInicio
    }
    get fechaInicio(){
        return this._FechaInicio
    }
    // this._Estado = Estado
    set estado(newEstado){
        this._Estado = newEstado
    }
    get estado(){
        return this._Estado
    }

    //----------------------------------------------------------------
    //----------Todos los servicios para los repoprtes------------------
    //----------------------------------------------------------------
    getServicios(p = new Servicio({})) {

        return fetch(`${apiURL}`, {
            method: 'GET'
        })
            .then((res) => res.json())
            .then(this.fromAjaxResponseToProducts)
    }
}

export default Servicio