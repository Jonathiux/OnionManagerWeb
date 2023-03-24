

import React, { useState } from 'react';
import './registrarse.css'
import Title from './componentes/Title/Title';
import Label from './componentes/Label/Label';
import Input from './componentes/Input/Input';


const Registrarse = () => {


    const [registro, setRegistro] = useState('');
    const [password, setPasswordRES] = useState('');
    const [passwordError, setPasswordErrorRES] = useState('')
    





    function handleChange(name, value) {
        if (name === 'USUARIO') {
            setRegistro(value)
        
        } else {
            if (value.length < 5) {
                setPasswordErrorRES(true);

            } else {
                setPasswordErrorRES(false)
                setPasswordRES(value)

            }

        }
    };
    function handleSubmit() {
        let account = { registro, password }
        if (account) {
            console.log('account:', account);
        }
    };

    return (

        <div className='fondo-registro'>
            <div className='registro-conteiner'>
                <div className='registro-content'>


                    <Title text='¡REGISTRARSE!' />
                    <Label text='USUARIO' />
                    <Input 
                        attributoo={{
                            id: 'usuario',
                            name: 'usuario',
                            type: 'text',
                            placeholder: 'Ingrese usuario'

                        }}

                        handleChange={handleChange}
                    />
                    <Label text='CONTRASEÑA' />
                    <Input gi
                        attributoo={{
                            id: 'contraseña',
                            name: 'contraseña',
                            type: 'password',
                            placeholder: 'Ingrese contraseña'

                        }}

                        handleChange={handleChange}
                        param={setPasswordErrorRES}
                    />



                    <Label text='NOMBRE' />
                    <Input gi
                        attributoo={{
                            id: 'NOMBRE',
                            name: 'NOMBRE',
                            type: 'name',
                            placeholder: 'Ingrese contraseña'

                        }}

                        handleChange={handleChange}
                        param={setPasswordErrorRES}
                    />



                    <Label text='APELLIDO' />
                    <Input gi
                        attributoo={{
                            id: 'APELLIDO',
                            name: 'APELLIDO',
                            type: 'last name',
                            placeholder: 'Ingrese apellido'

                        }}

                        handleChange={handleChange}
                        param={setPasswordErrorRES}
                    /> 




                    <Label text='NUMERO' />
                    <Input gi
                        attributoo={{
                            id: 'NUMERO',
                            name: 'NUMERO',
                            type: 'num',
                            placeholder: 'Ingrese numero'

                        }}

                        handleChange={handleChange}
                        param={setPasswordErrorRES}
                    />

                    {passwordError &&

                        <label className='label-registro-error'>
                            contraseña invalida o incompleta
                        </label>

                    }
            
                    <div className='button-registrar'>
                        <button onClick={handleSubmit} className='sub-button2'>
                            --REGISTRAR--
                        </button>

                    </div>

                </div>
                </div>
        </div>
    );
};

export default Registrarse;