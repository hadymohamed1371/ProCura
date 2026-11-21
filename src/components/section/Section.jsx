import React from 'react'

import "./Section.css"

import Head_Title from '../head_title/Head_Title'
import Badge from '../badge/Badge'

export default function Section({title, subtitle, logo, positiveBadgeContent, negativeBadgeContent, curve, children}) {
    return (
        <div className='section-body'>
            <div className="section-content">
                {(title || subtitle || logo) && <Head_Title className='title' 
                title={title}
                subtitle={subtitle}
                logo={logo}
                />}

                {(positiveBadgeContent && (
                    <div className="badge">
                        <Badge badgeContent={positiveBadgeContent} state="positive" />
                    </div>
                ))
                ||
                (negativeBadgeContent && (
                    <div className="badge">
                        <Badge badgeContent={negativeBadgeContent} state="negative" />
                    </div>
                ))}

                <div className="children">

                    {children}
                
                </div>
            </div>

            {curve && <img src={curve} className="curve" />}
        </div>
    )
}
