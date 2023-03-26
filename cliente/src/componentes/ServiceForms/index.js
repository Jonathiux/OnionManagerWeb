import userEvent from '@testing-library/user-event';
import useUser from 'hooks/useUser';
import { useState } from 'react';
import Servicio from 'services/servicios';
import './index.css';

export default function Forms({ tipoServicio, preciou, hide }) {
    const [cantidad, setCantidad] = useState(1);
    const [idServicio, setIdServicio] = useState(1);
    const [descripcion, setDescripcion] = useState(false);
    const [descripcionu, setDescripcionU] = useState(false);
    const [medida, setMedida] = useState('');
    const [corte, setCorte] = useState('');
    const [precioU, setPrecioU] = useState('Precio unitario');
    const [precioT, setPrecioT] = useState('Precio Total');
    const [anticipo, setAnticipo] = useState(0);
    const [fechaS, setFechaS] = useState('');
    const estado = 'Pendiente'

    const { user } = useUser()
    let idusuario = user.id

    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth()+1;
    const year = fecha.getFullYear();

    const getprecioT = () => {
        setPrecioU(preciou)
        setPrecioT((precioU * cantidad) - anticipo)
    }

    const handleSubmit = () => {
        const folio = `${idusuario}${idServicio}`
        setFechaS(`${year}-${mes}-${dia}`)
        switch (tipoServicio) {
            case 'Corte cnc':
                setIdServicio(1)
                setDescripcion('Medida: ' + medida + '\n' + 'Corte: ' + corte + '\n' + descripcionu)
                break
            case 'Rectificar':
                setIdServicio(2)
                setDescripcion('Medida: ' + medida + '\n' + descripcionu)
                break
            case 'Modificación':
                setIdServicio(3)
                setDescripcion('Medida: ' + medida + '\n' + descripcionu)
                break
            case 'Ensanchar':
                setIdServicio(4)
                setDescripcion('Medida: ' + medida + '\n' + descripcionu)
                break
        }
        const s = new Servicio({
            ID: null,
            Folio: folio,
            TipoServicio: idServicio,
            Cantidad: cantidad,
            Descripcion: descripcion,
            PrecioUnitario: preciou,
            PrecioTotal: precioT,
            Anticipo: anticipo,
            Observaciones: 'ninguna',
            FechaEntrega: null,
            FechaSolicitado: fechaS,
            FechaInicio: null,
            Estado: estado,
            IDUsuario: idusuario,
        })
        s.postServicios(s)
    }

    return (
        <>
            <div className='container' onMouseMove={getprecioT} onClickCapture={getprecioT}>
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
                            <input type="number" disabled placeholder={preciou} onChange={() => { setPrecioU(preciou); getprecioT() }} name="PrecioU" className='input'
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
                            <input type="number" placeholder="Cantidad" name="Cantidad" className='input' on
                                onInputCapture={(e) => { setCantidad(e.target.valueAsNumber); getprecioT() }}></input>
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
                                onChange={(e) => { setAnticipo(e.target.valueAsNumber); getprecioT() }}></input>
                        </div>
                    </div>
                    <div className='col-2'>
                        <button className='button' onClick={handleSubmit}>Solicitar</button>
                    </div>
                </div>
            </div>

        </>
    )
}