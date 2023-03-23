import { useState } from 'react';
import './index.css';

export default function Forms({ tipoServicio, precio, hide }) {
    const [cantidad, setCantidad] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precioT, setPrecioT] = useState('');
    const [anticipo, setAnticipo] = useState('');
    const [fechaS, setFechaS] = useState('');

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
                            <input type="number" disabled placeholder={precio} name="PrecioU" className='input'></input>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='input-wrapper2'>
                            <input type="number" disabled placeholder="Precio Total" name="precioT" className='input'
                                preciot={cantidad} onChange={() => setPrecioT({ cantidad } * { precio })}></input>
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
                                descripcion={descripcion} onChange={e => setDescripcion(e.target.descripcion)}></input>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='input-wrapper2'>
                            <input type="number" placeholder="Cantidad" name="Cantidad" className='input'
                                cantidad={cantidad} onChange={e => setCantidad(e.target.cantidad)}></input>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='input-wrapper'>
                            <select className='select'>
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
                            <select className='select' hidden={hide}>
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
                    <div className='col-2'>
                        <button className='button' >Solicitar</button>
                    </div>
                </div>
            </div>

        </>
    )
}