import React from 'react'

import './Button.css'

export default function Button({buttonContent, logo, appearance='default', disabled, type='button', actionOnClick}) {
  return (
    <div>
        <button type={type} className={`button ${appearance === 'default' ? appearance : 'cancel-back'} ${disabled && 'disabled'}`} disabled={disabled} onClick={actionOnClick}>
            {logo && <img src={logo} className="button-logo" />}
            {buttonContent}
        </button>
    </div>
  )
}
