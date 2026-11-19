import React from 'react'

import "./Section.css"

import Head_Title from './Head_Title'
import Badge from './Badge'

export default function Section({title, logo, positiveBadgeContent, negativeBadgeContent, children, curve}) {
    return (
        <div className='section-body'>
            <div className="section-content">
                <Head_Title className='title' 
                title={title}
                logo={logo}
                />

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

                <div className="">

                    {children}
                
                </div>
            </div>

            {curve && <img src={curve} className="curve" alt="" />}
        </div>
    )
}
