import React from 'react';
import './Input.css';

const Input =  ({ attributoo, handleChange,param}) => {
    return (
        <div className='imput-conteiner my-3'>
      <input 
      id={attributoo.id}
      name={attributoo.name}
      placeholder={attributoo.placeholder}
      type={attributoo.type}
      onChange={(e)  => handleChange(e.target.name,e.target.value)      } 
      className={ param ? 'input-e rror' : 'regular-style'}
      />

        </div>
    );
};

export default Input;