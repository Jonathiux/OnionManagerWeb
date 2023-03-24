import './index.css'
import { Form } from 'react-bootstrap'
import { Grafica } from 'pages/Finanzas/Grafica'
import Servicio from 'services/servicios'
import { useEffect, useRef, useState } from 'react'

function Finanzas(params) {

    const [anios, setAnios] = useState([])
    const [meses, setMeses] = useState([])
    const [servActuales, setServActuales] = useState([0, 0, 0, 0, 0])
    const [intervals, setIntervals] = useState([0, 0, 0, 0, 0])
    const [services, setServices] = useState([])
    const [data, setData] = useState()
    const [render, setRender] = useState(false)
    const [TotalIngresos, setTotalIngresos] = useState(0)
    const [totalServicios, setTotalServicios] = useState(0)

    const nameMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    const refAnio = useRef()
    const refMes = useRef()
    const refTipo = useRef()

    const handleRender = () => setRender(!render)

    useEffect(() => {
        const s = new Servicio({})
        s.getServicios(s)
            .then(resp => {
                setServices(resp)
                let totalIngresos = 0
                let totalServicios = 0
                let anios = []
                resp.forEach((s) => {

                    totalServicios++

                    totalIngresos += parseInt(s.PrecioTotal)

                    const anio = new Date(s.FechaEntrega).getFullYear()
                    if (!anios.includes(anio)) {
                        anios = [...anios, anio]
                    }

                })
                setTotalServicios(totalServicios)
                setTotalIngresos(totalIngresos)
                setAnios(anios)
            })
    }, [])

    const handleChangAnio = () => {
        handleRender()
        setIntervals([0, 0, 0, 0, 0])
        setMeses([])
        services.forEach((s) => {
            const fecha = new Date(s.FechaEntrega)
            const mes = fecha.getMonth()
            const anio = fecha.getFullYear()

            if (anio === parseInt(refAnio.current.value)) {
                setMeses(prevMeses => {
                    if (!prevMeses.includes(mes)) {
                        return [...prevMeses, mes]
                    }
                    return prevMeses
                })
            }
        })
    }

    const handleChangMes = () => {
        handleRender()
        setIntervals([0, 0, 0, 0, 0])
        const precioServicios = [0, 0, 0, 0, 0]
        services.forEach((s) => {
            const fecha = new Date(s.FechaEntrega)
            const mes = fecha.getMonth()
            const anio = fecha.getFullYear()


            if (anio === parseInt(refAnio.current.value) && mes === parseInt(refMes.current.value)) {
                switch (parseInt(s.TipoServicio)) {
                    case 1:
                        setIntervals(intervals => {
                            const newData = [...intervals]
                            newData[0]++
                            return newData
                        })
                        precioServicios[0] += s.PrecioTotal
                        break
                    case 2:
                        setIntervals(intervals => {
                            const newData = [...intervals]
                            newData[1]++
                            return newData
                        })
                        precioServicios[1] += s.PrecioTotal
                        break
                    case 3:
                        setIntervals(intervals => {
                            const newData = [...intervals]
                            newData[2]++
                            return newData
                        })
                        precioServicios[2] += s.PrecioTotal
                        break
                    case 4:
                        setIntervals(intervals => {
                            const newData = [...intervals]
                            newData[3]++
                            return newData
                        })
                        precioServicios[3] += s.PrecioTotal
                        break
                    case 5:
                        setIntervals(intervals => {
                            const newData = [...intervals]
                            newData[4]++
                            return newData
                        })
                        precioServicios[4] += s.PrecioTotal
                        break
                    default:
                        break
                }
            }
        })
        setServActuales(precioServicios)
    }

    useEffect(() => {
        if (parseInt(refTipo.current.value) === 2) {
            setData({
                labels: ['Retificaciones', 'Cortes CNC', 'Ensanchados', 'Modificaciones', 'Barrenaciones'],
                datasets: [
                    {
                        type: 'bar',
                        label: 'Servicios',
                        backgroundColor: '#19f6f68f',
                        borderColor: 'black',
                        data: intervals
                    }
                ]
            })
        } else if (parseInt(refTipo.current.value) === 1) {
            setData(
                {
                    labels: ['Retificaciones', 'Cortes CNC', 'Ensanchados', 'Modificaciones', 'Barrenaciones'],
                    datasets: [
                        {
                            type: 'line',
                            label: 'Total Ingreso',
                            borderColor: 'black',
                            borderWidth: 2,
                            fill: false,
                            data: servActuales
                        },
                        {
                            type: 'bar',
                            label: 'Coste',
                            backgroundColor: '#19f6f68f',
                            borderColor: 'black',
                            data: servActuales.map(s => s * .70)
                        },
                        {
                            type: 'bar',
                            label: 'Ganancia',
                            backgroundColor: '#6e19f68c',
                            borderColor: 'black',
                            data: servActuales.map(s => s * .30)
                        }
                    ]

                }
            )
        }
        // eslint-disable-next-line
    }, [render])

    return (
        <>
            <div className='finanzas-container' >
                <div className='fila'>
                    <div className='title-container'>
                        <div className='title-text'>
                            Reportes
                        </div>
                        <div>
                            {/* Dashboard Financiero */}
                        </div>
                        <div className='my-3' >
                            <label htmlFor="">Tipo de Reporte</label>
                            <Form.Select ref={refTipo} onChange={handleChangMes}>
                                <option>Selecciona un tipo</option>
                                <option value="1">Reporte Financiero</option>
                                <option value="2">Reporte de Servicios</option>
                            </Form.Select>
                        </div>
                        <div className='my-3' >
                            <label htmlFor="">Año</label>
                            <Form.Select onChange={handleChangAnio} ref={refAnio}>
                                <option>Selecciona el año</option>
                                {
                                    anios.map(i => <option key={i}>{i}</option>)
                                }
                            </Form.Select>
                        </div>
                        <div className='my-3' >
                            <label htmlFor="">Mes</label>
                            <Form.Select onChange={handleChangMes} ref={refMes}>
                                <option>Selecciona el Mes</option>
                                {
                                    meses.sort((a, b) => a - b)
                                        .map(m =>
                                            <option key={m} value={m}>{nameMeses[m]}</option>
                                        )
                                }
                            </Form.Select>
                        </div>
                    </div>

                    <div className='columna body-container'>
                        <div className='cards'>
                            <div className='info-card'>
                                <p>${TotalIngresos}</p>
                                <p>Total de Ingresos</p>
                            </div>
                            <div className='info-card'>
                                <p>${TotalIngresos * .70}</p>
                                <p>Total de Gastos</p>
                            </div>
                            <div className='info-card'>
                                <p>{totalServicios}</p>
                                <p>Total de Servicios</p>
                            </div>
                            <div className='info-card'>
                                <p>${TotalIngresos * .30}</p>
                                <p>Total de Beneficio</p>
                            </div>
                        </div>
                        <div className='grafica-container'>
                            <Grafica intervalos={data} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Finanzas