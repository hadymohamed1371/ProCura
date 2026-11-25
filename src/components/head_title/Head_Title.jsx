import React from 'react'

import './stylesheets/Head_Title.css'

export default function Head_Title({title, pageTitle, subtitle, logo}) {
  return (
    <div className="container">
        {logo && <img src={logo} className="title-logo" style={pageTitle ? {width: '40px'} : {width: '30px'}} />}

        <div className="title-subtitle-container">
            <div className="">
                <p className='title-content' style={pageTitle ? { fontSize: '24px' } : { fontSize: '20px' }}>
                    {title}
                </p>
            </div>

            {subtitle && (
                <p className="subtitle-content" style={pageTitle ? {fontSize: '18px'} : {fontSize: '16px'}}>
                    {subtitle}
                </p>
            )}
        </div>
    </div>
  )
}
