import React from 'react'

import '../stylesheets/Sign_Up.css'

import About from '../../landing/sections/components/About'
import Features from '../../landing/sections/components/Features'
import Footer from '../../../components/footer/components/Footer'

export default function Sign_Up() {
    return (
        <div>

            {/* Write Sign Up content here  */}

            <About id={'about'} />
                        
            <Features id={'features'} />

            <Footer />

        </div>
    )
}
