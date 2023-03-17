
import { useState } from 'react';
import './index.css';

export default function Forms() {
    const [tipoServicio, setTipo] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precioU, setPrecioU] = useState('');
    const [precioT, setPrecioT] = useState('');
    const [anticipo, setAnticipo] = useState('');
    const [fechaS, setFechaS] = useState('');

    return (
        <>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-3'>
                    <div className='input-wrapper'>
                        <input type="text" placeholder="Tipo de Servicio" name="TipoServicio" className='input'
                            tipoServicio={tipoServicio} onChange={e => setTipo(e.target.tipoServicio)}></input>
                    </div>
                </div>
                <div className='col-1'></div>
                <div className='col-2'>
                    <div className='input-wrapper2'>
                        <input type="text" placeholder="Cantidad" name="Cantidad" className='input'
                            cantidad={cantidad} onChange={e => setCantidad(e.target.cantidad)}></input>
                    </div>
                </div>
                <div className='col-1'></div>
                <div className='col-3'>
                    <div className='input-wrapper2'>
                        <input type="text" disabled placeholder="Precio" name="PrecioU" className='input'
                            cantidad={tipoServicio} onChange={e => setPrecioU(e.target.cantidad)}></input>
                    </div>
                </div>
            </div>
            <div className='input-wrapper'>
                <input type="text" placeholder="Descripcion" name="TipoServicio" className='input'
                    descripcion={tipoServicio} onChange={e => setTipo(e.target.descripcion)}></input>
            </div>

        </>
    )
}