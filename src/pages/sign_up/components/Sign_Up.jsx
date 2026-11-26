import React from 'react'

import '../stylesheets/Sign_Up.css'
import { useState } from 'react'

import About from '../../landing/sections/components/About'
import Features from '../../landing/sections/components/Features'
import Footer from '../../../components/footer/components/Footer'
import ProCura_banner from "../../../assets/logos/ProCura_banner.svg"




import { useNavigate } from 'react-router-dom'



export default function Sign_Up() {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const password = formData.get('password')
        const confirmPassword = formData.get('confirmPassword')

        if (password !== confirmPassword) {
            alert('Passwords do not match!')
            return
        }

        alert('Account Created!')
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
        <div className="signup-page">

            <div className="signup-card">

                <div className="signup-tabs">

                    <button className="active" type="button">
                        Sign Up
                    </button>

                    <button
                        type="button"
                        onClick={() => navigate('/sign-in')}
                    >
                        Sign In
                    </button>

                </div>

                <div className="signup-heading">
                    <h2>Create Your Account</h2>

                    <p>
                        Join Procura and start your journey
                        towards better health
                    </p>
                </div>

                <form className="signup-form" method='POST' onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        minLength="8"
                        required
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        minLength="8"
                        required
                    />

                    <button type="submit" className="signup-submit">
                        Create Account
                    </button>

                </form>

                <div className="signup-divider">
                    <span></span>
                    <p>or</p>
                    <span></span>
                </div>

                <div className="signup-footer">
                    Already have an account?

                    <button
                        type="button"
                        onClick={() => navigate('/sign-in')}
                    >
                        Sign In
                    </button>
                </div>

            </div>

        </div>
        </div>
    )
}
