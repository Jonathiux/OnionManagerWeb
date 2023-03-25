import { useState } from 'react';
import Servicio from 'services/servicios';
import './index.css';

export default function Forms({ tipoServicio, precio, hide }) {
    const [cantidad, setCantidad] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [descripcionu, setDescripcionU] = useState('');
    const [medida, setMedida] = useState('');
    const [corte, setCorte] = useState('');
    const [precioU, setPrecioU] = useState('');
    const [precioT, setPrecioT] = useState('');
    const [anticipo, setAnticipo] = useState('');
    const [fechaS, setFechaS] = useState('');
    const estado = 'Pendiente'

    const fecha = new Date();
    const hoy = fecha.toLocaleDateString('Mex');

    const getprecioT = () => {
        setPrecioT(precio+cantidad)
    }

    const handleSubmit = () => {
        setFechaS(hoy.toLocaleString('MEX'))
        if(tipoServicio=='Corte cnc'){
            setDescripcion('Medida: '+ medida +'\n'+'Corte: ' + corte +'\n'+ descripcionu)
        }else{
            setDescripcion('Medida: ' + medida + '\n' + descripcion)
        }
        const servicio = new Servicio({
            Cantidad: cantidad,
            TipoServicio: tipoServicio,
            Descripcion: descripcion,
            Estado: estado,
            Anticipo: anticipo,
            FechaSolicitado: fechaS,
            PrecioTotal: precioT,
            PrecioUnitario: precio
        })
        
        console.log(tipoServicio)
        console.log(precio)
        console.log(precioT)
        console.log(descripcion)
        console.log(cantidad)
        console.log(estado)
        console.log(anticipo)
        console.log(fechaS)
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <h2 className='title'>Solicitud de servicio</h2>
                </div>
                <div className='row'>
                    <div className='col-5'>
                        <div className='input-wrapper'>
                            <input disabled placeholder={tipoServicio} name="TipoServicio" className='input'
                            ></input>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='input-wrapper2'>
                            <input type="number" disabled placeholder={precio} onChange={getprecioT} name="PrecioU" className='input'
                               ></input>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='input-wrapper2'>
                            <input type="number" disabled placeholder={precioT} name="precioT" className='input'
                            ></input>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <h2 className='col-7'>Llenado de datos del servicio</h2>
                </div>
                <div className='row'>
                    <div className='col-5'>
                        <div className='input-wrapper'>
                            <input type="text" placeholder="Descripción" name="descripcion" className='input'
                                onChange={(e) => setDescripcionU(e.target.value)}></input>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='input-wrapper2'>
                            <input type="number" placeholder="Cantidad" name="Cantidad" className='input'
                                onChange={(e) => setCantidad(e.target.value) && getprecioT}></input>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='input-wrapper'>
                            <select className='select' onChange={(e) => setMedida(e.target.value)}>
                                <option defaultValue={'14"'} >Medida</option>
                                <option value='14"'>14"</option>
                                <option value='15"'>15"</option>
                                <option value='16"'>16"</option>
                                <option value='17"'>17"</option>
                                <option value='18"'>18"</option>
                                <option value='19.5"'>19.5"</option>
                                <option value='20"'>20"</option>
                                <option value='22.5"'>22.5"</option>
                                <option value='24.5"'>24.5"</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='input-wrapper'>
                            <select className='select' hidden={hide} onChange={(e) => setCorte(e.target.value)}>
                                <option defaultValue={'Corte normal'}>Tipo de corte</option>
                                <option value='Corte normal'>Corte normal</option>
                                <option value='Corte de lujo Triangular'>Corte de lujo 1 Triangular</option>
                                <option value='Corte lujo circular'>Corte de lujo 2 circular</option>
                                <option value='Corte lujo cuadrado'>Corte de lujo 3 cuadrado</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3'>
                        <div className='input-wrapper2'>
                            <input type="number" placeholder="Anticipo" name="anticipo" className='input'
                                onChange={(e) => setAnticipo(e.target.value)}></input>
                        </div>
                    </div>
                    <div className='col-2'>
                        <button className='button' precio={precioU} onClick={handleSubmit}>Solicitar</button>
                    </div>
                </div>
            </div>

        </>
    )
}