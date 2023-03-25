import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import useUser from 'hooks/useUser'

import Title from './components/Title/Title'
import Label from './components/Label/Label'
import Input from './components/Input/Input'

import './Login.css'

const Login = () => {

    const [username, setUser] = useState(null)
    const [password, setPassword] = useState(null)
    const [passwordError, setPasswordError] = useState(null)

    const { login, isLogged, loading, error, user } = useUser()
    const navigate = useNavigate()



    function handleChange(name, value) {
        if (name === 'usuario') {
            setUser(value)
            //variable para almacenar
        } else {
            if (value.length < 5) {
                setPasswordError(true)
            } else {
                setPasswordError(false)
                setPassword(value)
            }
        }
    }

    function handleSubmit() {
        login({ password: password, username: username })
    }

    useEffect(() => {
        if (isLogged) {
            if(user.tipo === 1){
                navigate('/home-admin')
            }else{
                navigate('/')
            }
        }
    }, [isLogged, navigate,user])

    return (
        <div className='fondo-login'>
            <div className='logo-conteiner'>
                <div className='logo-content'>
                    <Title text='¡Bienvenido!' />
                    <Label text='USUARIO' />
                    <Input
                        attributo={{
                            id: 'usuario',
                            name: 'usuario',
                            type: 'text',
                            placeholder: 'Ingrese usuario'
                        }}
                        handleChange={handleChange}
                    />
                    <Label text='CONTRASEÑA' />
                    <Input gi
                        attributo={{
                            id: 'contraseña',
                            name: 'contraseña',
                            type: 'password',
                            placeholder: 'Ingrese contraseña'
                        }}
                        handleChange={handleChange}
                        param={passwordError}
                    />
                    {passwordError &&
                        <label className='label-error'>
                            contraseña invalida o incompleta
                        </label>
                    }
                    <div className='sub-button-conteiner'>
                        <button onClick={handleSubmit} className='sub-button'>
                            --INGRESAR--
                        </button>
                    </div>
                    <div className='sub-button-conteiner'>
                        <button onClick={handleSubmit} disabled={loading} className='sub-button2'>
                            --REGISTRARSE--
                        </button>
                    </div>
                    {
                        loading &&
                        <>
                            <div className='spinner-login m-3' >
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </>
                    }
                    {
                        error &&
                        <>
                            <div className="alert alert-danger">
                                {error}
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Login