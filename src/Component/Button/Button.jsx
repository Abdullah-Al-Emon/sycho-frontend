import React from 'react';
import './Button.css'

const Button = ({buttontext}) => {
  return (
    <button className='button'>
        {buttontext}
    </button>
  )
}

export default Button