import React, { useState } from 'react'
import './registrarse.css'
import Label from './componentes/Label/Label'
import Input from './componentes/Input/Input'
import Usuario from 'services/usuario'
import ToastAlert from 'componentes/ToastAlert'
import { useNavigate } from 'react-router-dom'

const Registrarse = () => {

    const [toastAlert, setToastAlert] = useState({ color: null, estado: false, msg: null })

    const [password, setPassword] = useState(null)
    const [username, setUsername] = useState(null)
    const [apellidos, setApellidos] = useState(null)
    const [telefono, setTelefono] = useState(null)
    const [nombre, setNombre] = useState(null)

    const navigate = useNavigate()

    const handleToast = () => {
        setToastAlert({ estado: !toastAlert.estado })
      }

    function handleChange() {

    }

    function handleSubmit() {
        const u = new Usuario({
            Apellidos: apellidos,
            Contrasena: password,
            Nombre: nombre,
            Telefono: telefono,
            Username: username
        })
        u.postUsuario(u)
            .then(resp => {
                if(resp.error){
                    setToastAlert({color:'danger',estado:true,msg:resp.error})
                }else{
                    setToastAlert({color:'success',estado:true,msg:resp.msg})
                    navigate('/login')

                }
            })
    }

    return (
        <div className='fondo-registro'>
            <ToastAlert
                color={toastAlert.color}
                estado={toastAlert.estado}
                mensaje={toastAlert.msg}
                handleEstado={handleToast}
            />
            <div className='registro-conteiner'>
                <div className='registro-content'>
                    <Label text='Nombre de usuario' />
                    <Input
                        attributoo={{
                            id: 'usuario',
                            name: 'usuario',
                            type: 'text',
                            placeholder: 'Ingrese Nombre de usuario',
                        }}
                        state={setUsername}
                        handleChange={handleChange}
                    />
                    <Label text='Contraseña' />
                    <Input gi
                        attributoo={{
                            id: 'contraseña',
                            name: 'contraseña',
                            type: 'password',
                            placeholder: 'Ingrese Contraseña',
                        }}
                        state={setPassword}
                        handleChange={handleChange}
                    />
                    <Label text='Nombre' />
                    <Input gi
                        attributoo={{
                            id: 'nombre',
                            name: 'nombre',
                            type: 'name',
                            placeholder: 'Ingrese Nombre',
                        }}
                        state={setNombre}
                        handleChange={handleChange}
                    />
                    <Label text='Apellido' />
                    <Input gi
                        attributoo={{
                            id: 'apellido',
                            name: 'apellido',
                            type: 'last name',
                            placeholder: 'Ingrese Apellido',
                        }}
                        state={setApellidos}
                        handleChange={handleChange}
                    />
                    <Label text='Numero' />
                    <Input gi
                        attributoo={{
                            id: 'Numero',
                            name: 'numero',
                            type: 'num',
                            placeholder: 'Ingrese Numero',
                        }}
                        state={setTelefono}
                        handleChange={handleChange}
                    />
                    <div className='button-registrar'>
                        <button onClick={handleSubmit} className='sub-button22'>
                            --REGISTRAR--
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registrarse