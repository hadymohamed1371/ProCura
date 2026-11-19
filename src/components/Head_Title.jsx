import React from 'react'

import './Head_Title.css'

export default function Head_Title({title, pageTitle, subtitle, logo}) {
  return (
    <div className="container">
        {logo && <img src={logo} className="title-logo" style={pageTitle ? {width: '40px'} : {width: '30px'}} />}

        <div className="title-subtitle-container">

            <p className='title-content' style={pageTitle ? { fontSize: '24px' } : { fontSize: '20px' }}>
                {title}
            </p>

            {pageTitle && (
                <p className="subtitle-content">
                    {subtitle}
                </p>
            )}
        </div>
    </div>
  )
}
