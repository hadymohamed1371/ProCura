import React from 'react'

import '../../../Dashboard.css'

import Blood_Pressure from './sections/Blood_Pressure'
import Heart_Rate from './sections/Heart_Rate'
import Blood_Glucose from './sections/Blood_Glucose'
import Health_Trends from './sections/Health_Trends'
import Overall_Health from './sections/Overall_Health'

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
