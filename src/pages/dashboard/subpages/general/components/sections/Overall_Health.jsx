import React from 'react'

import './stylesheets/Overall_Health.css'

import Section from '../../../../../../components/section/Section'
import Head_Title from '../../../../../../components/head_title/Head_Title'
import Badge from '../../../../../../components/badge/components/Badge'

export default function Overall_Health() {
    return (
        
        <Section
        title={'Overall Health'}
        subtitle={'Your health at a glance.'}
        negativeBadgeContent="Attention"
        >
            
            <div className="overall-health-container">
                <div className="overall-health-items">
                    <div className="item-name">
                        <Head_Title 
                        title={'Blood Pressure'}
                        />
                    </div>
                    <div className="">
                        <Badge 
                        badgeContent={'Normal'}
                        state={'positive'}
                        />
                    </div>
                </div>
                <div className="overall-health-items">
                    <div className="item-name">
                        <Head_Title 
                        title={'Heart Rate'}
                        />
                    </div>
                    <div className="">
                        <Badge 
                        badgeContent={'Abnormal'}
                        state={'negative'}
                        />
                    </div>
                </div>
                <div className="overall-health-items">
                    <div className="item-name">
                        <Head_Title 
                        title={'Blood Glucose'}
                        />
                    </div>
                    <div className="">
                        <Badge 
                        badgeContent={'Normal'}
                        state={'positive'}
                        />
                    </div>
                </div>
            </div>

        </Section>

    )
}
