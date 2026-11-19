import React from 'react'

import './Badge.css'

export default function Badge({badgeContent, state}) {
  return (
    <div className={`badge-container ${state}-badge`}>
        <p className="badge-content">{badgeContent}</p>
    </div>
  )
}
