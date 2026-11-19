import React from 'react'

import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

    const navLinkClass = ({ isActive }) =>
    `inline-block border-b-[1.5px] pb-1 transition-colors duration-300 ${
        isActive
            ? 'text-red-100 border-red-100'
            : 'text-dark-30 border-transparent hover:text-red-100'
    }`;

    return (
        <nav className='nav-container'>
            <ul className="">
                <li>
                    <NavLink
                    to='/'
                    end
                    
                    >
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/patient-info' className={navLinkClass}>
                        Patient Info
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/settings' className={navLinkClass}>
                        Settings
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/profile-info' className={navLinkClass}>
                        Profile Info
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
