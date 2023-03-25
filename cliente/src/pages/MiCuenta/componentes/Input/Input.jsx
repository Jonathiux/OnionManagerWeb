import React from 'react'
import './Input.css'

const Input = ({ value }) => {

  return (
    <div className='imput-conteiner my-3'>
      <input
        defaultValue={value}
        className={'regular-style'}
      />
    </div>
  );
};

export default Input