import React from 'react';
import './Input.css';

const Input =  ({ attributo, handleChange,param}) => {
    return (
        <div className='imput-conteiner my-3'>
      <input 
      id={attributo.id}
      name={attributo.name}
      placeholder={attributo.placeholder}
      type={attributo.type}
      onChange={(e)  => handleChange(e.target.name,e.target.value)      } 
      className={ param ? 'input-error' : 'regular-style'}
      />

        </div>
    );
};
 
export default Input;