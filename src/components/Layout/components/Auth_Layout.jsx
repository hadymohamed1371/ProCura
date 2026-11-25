import React, { useRef } from 'react'

import '../stylesheets/Auth_Layout.css'

import ProCura_banner from "../../../assets/logos/ProCura_banner.svg";
import Button from '../../../components/button/Button'

import { Outlet } from 'react-router-dom'

export default function Auth_Layout() {
    
    const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })
    }
    
    return (
        <div className="auth-layout-container">
            <div className="landing-navbar">
                <div className="banner-container">
                    <img src={ProCura_banner} alt="ProCura" className="banner" />
                </div>
                <div className="buttons-container">
                    <div className="reference-buttons">
                        <Button 
                        buttonContent={'About'}
                        actionOnClick={() => scrollToSection('about')}
                        />
                        <Button 
                        buttonContent={'Features'}
                        actionOnClick={() => scrollToSection('features')}
                        />
                    </div>
                </div>
            </div>

            <main className='main-content'>

                <Outlet />
                
            </main>

        </div>
    )
}
