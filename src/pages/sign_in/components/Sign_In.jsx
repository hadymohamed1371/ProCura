import React from 'react'

import '../stylesheets/Sign_In.css'

import About from '../../landing/sections/components/About'
import Features from '../../landing/sections/components/Features'
import Footer from '../../../components/footer/components/Footer'

export default function Sign_In() {
    return (
        <div>

            {/* Write Sign In content here */}

            <About id={'about'} />
            
            <Features id={'features'} />

            <Footer />

        </div>
    )
}
