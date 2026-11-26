import React from 'react'
import { useNavigate } from 'react-router-dom'

import '../stylesheets/Get_Started.css'

import Button from '../../../../components/button/Button'

import Arrow_Right from '../../../../assets/icons/Arrow_Right.svg'
import Get_Started_photo from "../../../../assets/images/Get_Started_photo.png"


// import Get_Started_Curve_right from "../../../../assets/images/Get_Started_Curve_right.svg"
// import Get_Started_Curve_Left from "../../../../assets/images/Get_Started_Curve_Left.svg"



import ProCura_banner from "../../../../assets/logos/ProCura_banner.svg"




export default function Get_Started() {

    const navigate = useNavigate();


const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })


    }


    return (
        <div className="landing-hero-wrapper">
            {/* Navbar */}
    <div className="landing-navbar">
        <div className="banner-container">
           <img
    src={ProCura_banner}
    alt="ProCura"
    className="banner"
    onClick={() => navigate('/get-started')}
/>
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
        <div className='get-started-container'>
            <div className="title-subtitle-button-contianer">
                <div className="title-subtitle-container">
                    <p className="title">YOUR HEALTH,</p>
                    <p className="title priority">OUR PRIORITY.</p>
                    <p className="subtitle">Monitor your health easily and stay on track.</p>
                </div>

                <div className="buttons-container">
                   <button
        className="get-started-btn"
        onClick={() => navigate('/sign-up')}
    >
        <span>Get Started</span>
        <img src={Arrow_Right} alt="arrow" />
    </button>
                
    {/* <Button 
        buttonContent={'Get Started'}
        logoRight={Arrow_Right}
        actionOnClick={() => navigate('/sign-up')}
        
    /> */}
  <button
        className="sign-in-btn"
        onClick={() => navigate('/sign-in')}
    >
        Sign In
    </button>
    {/* <Button 
        buttonContent={'Sign In'}
        actionOnClick={() => navigate('/sign-in')}
    /> */}
</div>
                
            </div>
            <div className='get-started-photo'>
                    <img src={Get_Started_photo} alt="get-started-photo"/>
                </div>
                
        </div>
        </div>
    )
}
