import React, { useState } from 'react'

import Label from './componentes/Label/Label'
import Input from './componentes/Input/Input'

import Usuario from 'services/usuario'

import useUser from 'hooks/useUser'

const MiCuenta = () => {

    const { user } = useUser()

    const [username, setUsername] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [telefono, setTelefono] = useState('')
    const [nombre, setNombre] = useState('')

    useState(() => {
        const u = new Usuario({ IDUsuario: user.id })
        u.getUsuario(u)
            .then(resp => {
                console.log(resp)
                if (!resp.error) {
                    setUsername(resp[0].Username)
                    setApellidos(resp[0].Apellidos)
                    setNombre(resp[0].Nombre)
                    setTelefono(resp[0].Telefono)
                }
            })
    }, [])

    return (
        <div className='fondo-registro'>
            <div className='registro-conteiner'>
                <div className='registro-content'>
                    <Label text='Nombre de usuario' />
                    <Input
                        value={username}
                    />
                    <Label text='Nombre' />
                    <Input
                        value={nombre}
                    />
                    <Label text='Apellido' />
                    <Input
                        value={apellidos}
                    />
                    <Label text='Numero' />
                    <Input
                        value={telefono}
                    />
                </div>
            </div>
        </div>
    )
}

export default MiCuenta