import React from 'react'
import './Title.css'

const Title =  ({ text }) => {
    return (
        <div className='Title-conteriner'>
            <label className="Title-label">{text}</label>
        </div>
    );
};
 
export default Title