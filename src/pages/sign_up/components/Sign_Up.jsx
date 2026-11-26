// import React from 'react'

// import '../stylesheets/Sign_Up.css'
// import { useState } from 'react'

// import About from '../../landing/sections/components/About'
// import Features from '../../landing/sections/components/Features'
// import Footer from '../../../components/footer/components/Footer'

// import ProCura_logo from '../../../assets/logos/Procura_Logo.svg'



// import { useNavigate } from 'react-router-dom'



// export default function Sign_Up() {

//     const navigate = useNavigate()

//     const handleSubmit = (e) => {
//         e.preventDefault()

//         const formData = new FormData(e.target)

//         const password = formData.get('password')
//         const confirmPassword = formData.get('confirmPassword')

//         if (password !== confirmPassword) {
//             alert('Passwords do not match!')
//             return
//         }

//         alert('Account Created!')
//     }

//     return (
//         <div>
//     <div className="signup-page">

//             <div className="signup-card">

//                 <div className="signup-tabs">

//                     <button className="active" type="button">
//                         Sign Up
//                     </button>

//                     <button
//                         type="button"
//                         onClick={() => navigate('/sign-in')}
//                     >
//                         Sign In
//                     </button>

//                 </div>

//                 <div className="signup-heading">
//                     <h2>Create Your Account</h2>

//                     <p>
//                         Join Procura and start your journey
//                         towards better health
//                     </p>
//                 </div>

//                 <form className="signup-form" method='POST' onSubmit={handleSubmit}>

//                     <input
//                         type="text"
//                         name="fullName"
//                         placeholder="Full Name"
//                         required
//                     />

//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Email Address"
//                         required
//                     />

//                     <input
//                         type="password"
//                         name="password"
//                         placeholder="Password"
//                         minLength="8"
//                         required
//                     />

//                     <input
//                         type="password"
//                         name="confirmPassword"
//                         placeholder="Confirm Password"
//                         minLength="8"
//                         required
//                     />

//                     <button type="submit" className="signup-submit">
//                         Create Account
//                     </button>

//                 </form>

//                 <div className="signup-divider">
//                     <span></span>
//                     <p>or</p>
//                     <span></span>
//                 </div>

//                 <div className="signup-footer">
//                     Already have an account?

//                     <button
//                         type="button"
//                         onClick={() => navigate('/sign-in')}
//                     >
//                         Sign In
//                     </button>
//                 </div>

//             </div>

//         </div>
//                <About id={'about'} />
// <Features id={'features'} />
// <Footer />
//         </div>
 
//     )
// }

import React from 'react'
import { useNavigate } from 'react-router-dom'

import '../stylesheets/Sign_Up.css'

import ProCura_logo from '../../../assets/logos/Procura_Logo.svg'

import About from '../../landing/sections/components/About'
import Features from '../../landing/sections/components/Features'
import Footer from '../../../components/footer/components/Footer'

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

            
            <div className="signup-page">

               
                <svg
                    className="signup-shapes"
                    viewBox="0 0 1000 700"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <path d="M560 0 C700 15 790 80 790 170 C790 240 900 280 1000 296 L1000 0 Z" />

                    <path d="M0 430 C90 540 190 585 260 568 C330 550 380 565 400 600 C412 625 414 670 416 700 L0 700 Z" />

                    <path d="M1000 507 C930 540 895 580 895 610 C895 650 840 685 790 700 L1000 700 Z" />
                </svg>


                {/* Sign Up Card */}
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


                    <form
                        className="signup-form"
                        method="POST"
                        onSubmit={handleSubmit}
                    >

                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            autoComplete="name"
                            required
                        />

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
                            autoComplete="new-password"
                            minLength="8"
                            required
                        />

                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            autoComplete="new-password"
                            minLength="8"
                            required
                        />

                        <button
                            type="submit"
                            className="signup-submit"
                        >
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


                {/* Branding */}
                <div className="signup-branding">

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
