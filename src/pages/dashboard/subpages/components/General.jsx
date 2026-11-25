import React from 'react'

import '../stylesheets/General.css'

import Blood_Pressure from '../../sections/components/general/Blood_Pressure'
import Heart_Rate from '../../sections/components/general/Heart_Rate'
import Blood_Glucose from '../../sections/components/general/Blood_Glucose'
import Health_Trends from '../../sections/components/general/Health_Trends'
import Overall_Health from '../../sections/components/general/Overall_Health'

export default function General() {
    return (
        <div className='dashboard-grid'>
            <Blood_Pressure />
            <Heart_Rate />
            <Blood_Glucose />
            <Health_Trends />
            <Overall_Health />
        </div>
    )
}
