import React from 'react'

import './stylesheets/Button.css'

export default function Button({buttonContent, logoRight, logoLeft, appearance='default', disabled, type='button', actionOnClick}) {
  return (
    <div>
        <button type={type} className={`button ${appearance === 'default' ? appearance : 'cancel-back'} ${disabled && 'disabled'}`} disabled={disabled} onClick={actionOnClick}>
            {logoLeft && <img src={logoLeft} className="button-logo-left" />}
            
            {buttonContent}
            
            {logoRight && <img src={logoRight} className="button-logo-right" />}
        </button>
    </div>
  )
}
