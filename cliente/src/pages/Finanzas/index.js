import './index.css'
import AnyChart from 'anychart-react'
import { Container } from 'react-bootstrap'

function Finanzas(params) {

    const complexSettings = {
        width: 800,
        height: 600,
        type: 'column',
        data: 'P1,5\nP2,3\nP3,6\nP4,4',
        title: 'Column chart',
        yAxis: [1, {
            orientation: 'right',
            enabled: true,
            labels: {
                format: '{%Value}{decimalPoint:\\,}',
                fontColor: 'red'
            }
        }],
        legend: {
            background: 'lightgreen 0.4',
            padding: 0
        },
        lineMarker: {
            value: 4.5
        }
    }

    return (
        <>
            <Container className='finanzas-container' >
                <div className='row'>
                    <div className='col title-container'>
                        <div className='container'>
                            <div className='title-text'>
                                Finanzas
                            </div>
                        </div>
                    </div>

                    <div className='col body-container'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col info-card'>
                                    <p>8000 M</p>
                                    <p>Total de Ingresos</p>
                                </div>
                                <div className='col info-card'>
                                    <p>3000 M</p>
                                    <p>Total de Gastos</p>
                                </div>
                                <div className='col info-card'>
                                    <p>500 M</p>
                                    <p>Total de Servicio</p>
                                </div>
                                <div className='col info-card'>
                                    <p>2000 M</p>
                                    <p>Total de Beneficio</p>
                                </div>
                            </div>
                            <div className='row grafica-container'>
                                <div className=''>
                                    < AnyChart
                                        {...complexSettings}
                                    />
                                </div>
                                <div className=''>Grafica</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Finanzas