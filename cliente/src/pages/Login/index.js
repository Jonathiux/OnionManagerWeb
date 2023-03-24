
import React, { useState } from 'react';
import './Login.css'
import Title from './components/Title/Title';
import Label from './components/Label/Label';
import Input from './components/Input/Input';
//import logo from './components/img/fondo.png';


const Login = () => {


    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('')





    function handleChange(name, value) {
        if (name === 'usuario') {
            setUser(value)
            //variable para almacenar
        } else {
            if (value.length < 5) {
                setPasswordError(true);

            } else {
                setPasswordError(false)
                setPassword(value)

            }

        }
    };
    function handleSubmit() {
        let account = { user, password }
        if (account) {
            console.log('account:', account);
        }
    };

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
                        <button onClick={handleSubmit} className='sub-button2'>
                            --REGISTRARSE--
                        </button>

                    </div>

                </div>





            </div>
        </div>
    );
};

export default Login;