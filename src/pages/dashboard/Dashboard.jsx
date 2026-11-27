import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import './Dashboard.css'

import Disease_Navbar from '../../components/disease_navbar/Disease_Navbar'

import General from './subpages/general/components/General'

export default function Dashboard() {
    const { pathname } = useLocation()
    const isGeneralPage = pathname === '/' || pathname === '/dashboard'

    return (
        <div className='dashboard-body'>

            <Disease_Navbar
            routeStart={'/dashboard'}
            />

            {isGeneralPage ? (
                <General />
            ) : (
                <Outlet />
            )}
        </div>
    )
}
