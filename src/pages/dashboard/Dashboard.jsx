import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import './Dashboard.css'

import Disease_Navbar from '../../components/disease_navbar/Disease_Navbar'

import Blood_Pressure from './sections/Blood_Pressure'
import Heart_Rate from './sections/Heart_Rate'
import Blood_Glucose from './sections/Blood_Glucose'
import Health_Trends from './sections/Health_Trends'
import Overall_Health from './sections/Overall_Health'

export default function Dashboard() {
    const { pathname } = useLocation()
    const isGeneralPage = pathname === '/' || pathname === '/dashboard'

    return (
        <div className='dashboard-body'>

            <Disease_Navbar
            routeStart={'/dashboard'}
            />

            {isGeneralPage ? (
                <div className="dashboard-grid">
                    <Blood_Pressure />
                    <Heart_Rate />
                    <Blood_Glucose />
                    <Health_Trends />
                    <Overall_Health />
                </div>
            ) : (
                <Outlet />
            )}
        </div>
    )
}
