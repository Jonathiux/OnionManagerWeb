import React, { useRef } from 'react'
import './Input.css'

const Input = ({ attributoo, state, param }) => {

  const refInput = useRef()

  return (
    <div className='imput-conteiner my-3'>
      <input
        autoComplete="off"
        ref={refInput}
        placeholder={attributoo.placeholder}
        onChange={(e) => state(refInput.current.value)}
        className={param ? 'input-error' : 'regular-style'}
      />
    </div>
  );
};

export default Input