import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '../stylesheets/Sign_In.css'

import ProCura_logo from '../../../assets/logos/Procura_Logo.svg'

import About from '../../landing/sections/components/About'
import Features from '../../landing/sections/components/Features'
import Footer from '../../../components/footer/components/Footer'
import ProCura_banner from "../../../assets/logos/ProCura_banner.svg"
export default function Sign_In() {

    const navigate = useNavigate()

    const [rememberMe, setRememberMe] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const email = formData.get('email')
        const password = formData.get('password')

        // TODO: replace with the real sign-in request when the backend is ready
        console.log({ email, password, rememberMe })

        navigate('/dashboard')
    }

    return (
        <div>
<div className="landing-navbar">
        <div className="banner-container">
           <img
    src={ProCura_banner}
    alt="ProCura"
    className="banner"
    onClick={() => navigate('/get-started')}
/>
        </div>
            </div>
        
            {/* Sign In content */}
            <div className="signin-page">
    
                {/* Background shapes (decorative) */}
                <svg
                    className="signin-shapes"
                    viewBox="0 0 1000 700"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <path d="M560 0 C700 15 790 80 790 170 C790 240 900 280 1000 296 L1000 0 Z" />
                    <path d="M0 430 C90 540 190 585 260 568 C330 550 380 565 400 600 C412 625 414 670 416 700 L0 700 Z" />
                    <path d="M1000 507 C930 540 895 580 895 610 C895 650 840 685 790 700 L1000 700 Z" />
                </svg>
    
                <div className="signin-card">
    
                    <div className="signin-tabs">
    
                        <button
                            type="button"
                            onClick={() => navigate('/sign-up')}
                        >
                            Sign Up
                        </button>
    
                        <button className="active" type="button">
                            Sign In
                        </button>
    
                    </div>
    
                    <div className="signin-heading">
                        <h2>Welcome Back</h2>
    
                        <p>
                            Sign in to continue tracking
                            your health with Procura
                        </p>
                    </div>
    
                    <form className="signin-form" method="POST" onSubmit={handleSubmit}>
    
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            autoComplete="email"
                            required
                        />
    
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            autoComplete="current-password"
                            required
                        />
    
                        <div className="signin-options">
    
                            <label className="signin-remember">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                Remember Me
                            </label>
    
                            <button type="button" className="signin-forgot">
                                Forgot password?
                            </button>
    
                        </div>
    
                        <button type="submit" className="signin-submit">
                            Sign In
                        </button>
    
                    </form>
    
                    <div className="signin-divider">
                        <span></span>
                        <p>or</p>
                        <span></span>
                    </div>
    
                    <div className="signin-footer">
                        Don't have an account?
    
                        <button
                            type="button"
                            onClick={() => navigate('/sign-up')}
                        >
                            Sign Up
                        </button>
                    </div>
    
                </div>
    
                {/* Branding (bottom-left) */}
                <div className="signin-branding">
                    <img src={ProCura_logo} alt="ProCura" />
                    <p>
                        Better Health.
                        <br />
                        Brighter Tomorrow.
                    </p>
                </div>
    
    
            </div>

            <About id={'about'} />

            <Features id={'features'} />

            <Footer />

        </div>
    )
}
