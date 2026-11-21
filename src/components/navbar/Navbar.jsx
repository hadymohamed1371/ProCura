import React from 'react'

import './Navbar.css'
import { Link, NavLink, useLocation } from 'react-router-dom'

import ProCura_logo_name from '../../assets/logos/ProCura_logo_name.svg'
import Dashboard_Nav_logo from '../../assets/icons/Dashboard_Nav_logo.svg'
import Patient_Info_Nav_logo from '../../assets/icons/Patient_Info_Nav_logo.svg'
import Settings_Nav_logo from '../../assets/icons/Settings_Nav_logo.svg'
import Profile_Nav_logo from '../../assets/icons/Profile_Nav_logo.svg'
import ProCura_logo from '../../assets/logos/ProCura_logo.svg'

export default function Navbar() {
    const { pathname } = useLocation()

    const navLinkClass = ({ isActive }) => `nav-item ${isActive ? 'nav-item-active' : ''}`;
    const dashboardNavLinkClass = ({ isActive }) =>
        navLinkClass({ isActive: isActive || pathname === '/' })

    return (
        <nav className='navbar-container'>

            <Link to='/'>
                <img src={ProCura_logo_name} alt="ProCura" className='logo' />
            </Link>

            <NavLink
            to='/dashboard'
            className={dashboardNavLinkClass}
            >
                <img src={Dashboard_Nav_logo} className="nav-icon" />
                <p className="nav-link">
                    Dashboard
                </p>
            </NavLink>
            <NavLink to='/patient-info' className={navLinkClass}>
                <img src={Patient_Info_Nav_logo} className="nav-icon" />
                <p className="nav-link">
                    Patient Info
                </p>
            </NavLink>
            <NavLink to='/settings' className={navLinkClass}>
                <img src={Settings_Nav_logo} className="nav-icon" />
                <p className="nav-link">
                    Settings
                </p>
            </NavLink>
            <NavLink to='/profile' className={navLinkClass}>
                <img src={Profile_Nav_logo} className="nav-icon" />
                <p className="nav-link">
                    Profile
                </p>
            </NavLink>

            <div className="slogan-container">
                <img src={ProCura_logo} className="slogan-logo" />
                <div className="slogan-text">
                    <p className="">Better Health.</p>
                    <p className="">Brighter Tomorrow.</p>
                </div>
            </div>
        </nav>
    )
}
