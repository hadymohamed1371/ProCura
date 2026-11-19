import React from 'react'

import './Dashboard.css'
import Head_Title from '../../components/Head_Title'
import Dashboard_Page_Title_logo from '../../assets/icons/Dashboard_Page_Title_logo.svg'

import Blood_Pressure from './sections/Blood_Pressure'
import Heart_Rate from './sections/Heart_Rate'
import Blood_Glucose from './sections/Blood_Glucose'
import Health_Trends from './sections/Health_Trends'
import Overall_Health from './sections/Overall_Health'

export default function Dashboard() {
    return (
        <div className='dashboard-body'>

            <Head_Title 
            title={`Welcome, “name”`}
            pageTitle={true}
            subtitle="Here is your health summary so far."
            logo={Dashboard_Page_Title_logo}
            />

            <div className="dashboard-grid">
            
                <Blood_Pressure />
                <Heart_Rate />
                <Blood_Glucose />
                <Health_Trends />
                <Overall_Health />

            </div>
        </div>
    )
}
