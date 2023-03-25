

import React, { useState } from 'react';
import './registrarse.css'
import Title from './componentes/Title/Title';
import Label from './componentes/Label/Label';
import Input from './componentes/Input/Input';


const Registrarse = () => {


    const [registro, setRegistro] = useState('');
    const [password, setPasswordRES] = useState('');
    const [passwordError, setPasswordErrorRES] = useState('')
    const [name, setName] = useState('');
    const [lastname, setlastname] = useState('');
    const [num, setNum] = useState('');
    





    function handleChange(name, value) {
        if (name === 'USUARIO') {
            setRegistro(value)
            setName(value)
            setlastname(value)
            setNum(value)
            
        
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
        let account = { registro, password ,name,lastname,num }
        if (account) {
            console.log('account:', account);
        }
    };

    return (

        <div className='fondo-registro'>
            <div className='registro-conteiner'>
                <div className='registro-content'>


                    <Label text='Nombre de usuario' />
                    <Input 
                        attributoo={{
                            id: 'usuario',
                            name: 'usuario',
                            type: 'text',
                            placeholder: 'Ingrese Nombre de usuario'

                        }}

                        handleChange={handleChange}
                    />
                    <Label text='Contraseña' />
                    <Input gi
                        attributoo={{
                            id: 'contraseña',
                            name: 'contraseña',
                            type: 'password',
                            placeholder: 'Ingrese Contraseña'

                        }}

                        handleChange={handleChange}
                        
                    />



                    <Label text='Nombre' />
                    <Input gi
                        attributoo={{
                            id: 'nombre',
                            name: 'nombre',
                            type: 'name',
                            placeholder: 'Ingrese Nombre'

                        }}

                        handleChange={handleChange}
                        
                    />



                    <Label text='Apellido' />
                    <Input gi
                        attributoo={{
                            id: 'apellido',
                            name: 'apellido',
                            type: 'last name',
                            placeholder: 'Ingrese Apellido'

                        }}

                        handleChange={handleChange}
                        
                    /> 




                    <Label text='Numero' />
                    <Input gi
                        attributoo={{
                            id: 'Numero',
                            name: 'numero',
                            type: 'num',
                            placeholder: 'Ingrese Numero'

                        }}

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
    );
};

export default Registrarse;