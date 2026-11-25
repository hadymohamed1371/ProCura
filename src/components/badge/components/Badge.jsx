import React from 'react'

import '../stylesheets/Badge.css'

export default function Badge({badgeContent, state}) {
  return (
    <div className={`badge-container ${ (state === 'positive' || state === 'negative') ? `${state}-badge` : `neutral-badge`}`}>
        <p className="badge-content">{badgeContent}</p>
    </div>
  )
}
