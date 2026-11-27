import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import './Disease_Navbar.css'

import Head_Title from '../head_title/Head_Title';
import Dashboard_Page_Title_logo from '../../assets/icons/Dashboard_Page_Title_logo.svg'
import Patient_Info_Page_Title_logo from '../../assets/icons/Patient_Info_Page_Title_logo.svg'

import { apiRequest } from '../../lib/api'
export default function Disease_Navbar({routeStart}) {
    const [userName, setUserName] = useState(' ')
    const { pathname } = useLocation()
    const navLinkClass = ({ isActive }) =>
        `disease-nav-item ${isActive ? 'nav-link-active' : ''}`
    const generalNavLinkClass = ({ isActive }) =>
        `disease-nav-item ${isActive || pathname === '/' ? 'nav-link-active' : ''}`

    useEffect(() => {
        if (routeStart !== '/dashboard') return
        const token = localStorage.getItem('authToken') ?? sessionStorage.getItem('authToken')
        if (!token) return
        let isMounted = true
        apiRequest('/auth/me', { token })
            .then(({ user }) => {
                if (isMounted) setUserName(user.name?.trim() || 'User')
            })
            .catch((error) => {
                console.error('Failed to load the dashboard user:', error)
            })
        return () => {
            isMounted = false
        }
    }, [routeStart])
    
    return (
        <div className="">
            {routeStart === '/dashboard'
            &&
            <Head_Title 
            title={`Welcome, ${userName}`}
            pageTitle={true}
            subtitle={"Here is your health summary so far."}
            logo={Dashboard_Page_Title_logo}
            />}

            {routeStart === '/patient-info'
            &&
            <Head_Title 
            title="Patient Info"
            pageTitle={true}
            subtitle="Enter your health data."
            logo={Patient_Info_Page_Title_logo}
            />}
            <div className='disease-navbar-container'>

                {routeStart === '/dashboard' && <NavLink
                to={`${routeStart}`}
                end
                className={generalNavLinkClass}
                >
                    <p className="disease-nav-link-dashboard">
                        General
                    </p>
                </NavLink>}
                <NavLink
                to={`${routeStart}/cardiovascular`}
                className={navLinkClass}
                >
                    <p className={routeStart === '/dashboard' ? 'disease-nav-link-dashboard' : 'disease-nav-link'}>
                        Cardiovascular
                    </p>
                </NavLink>
                <NavLink
                to={`${routeStart}/chronic-obstructive-pulmonary`}
                className={navLinkClass}
                >
                    <p className={routeStart === '/dashboard' ? 'disease-nav-link-dashboard' : 'disease-nav-link'}>
                        Chronic Obstructive Pulmonary
                    </p>
                </NavLink>
                <NavLink
                to={`${routeStart}/diabetes`}
                className={navLinkClass}
                >
                    <p className={routeStart === '/dashboard' ? 'disease-nav-link-dashboard' : 'disease-nav-link'}>
                        Diabetes
                    </p>
                </NavLink>
                <NavLink
                to={`${routeStart}/heart`}
                className={navLinkClass}
                >
                    <p className={routeStart === '/dashboard' ? 'disease-nav-link-dashboard' : 'disease-nav-link'}>
                        Heart
                    </p>
                </NavLink>
                <NavLink
                to={`${routeStart}/liver`}
                className={navLinkClass}
                >
                    <p className={routeStart === '/dashboard' ? 'disease-nav-link-dashboard' : 'disease-nav-link'}>
                        Liver
                    </p>
                </NavLink>
            </div>
        </div>
    )
}
