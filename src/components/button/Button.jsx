import React from 'react'

import './Button.css'

export default function Button({buttonContent, action = 'button'}) {
  return (
    <div>
        <button type={action} className='button'>
            {buttonContent}
        </button>
    </div>
  )
}
