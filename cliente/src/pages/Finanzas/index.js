import './index.css'

function Finanzas(params) {
    return (
        <>
            <div className="row finanzas-container" >

                <div className="col-3 title-container">
                    <div className='container'>
                        <div className='title-text'>
                            Finanzas
                        </div>
                    </div>
                </div>
                <div className="col body-container">
                    <div className="container">
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
                                Grafica
                            </div>
                            <div className=''>Grafica</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Finanzas