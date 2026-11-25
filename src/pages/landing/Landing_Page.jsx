import React, { useRef } from 'react'

import './Landing_Page.css'

import ProCura_logo from '../../assets/logos/ProCura_logo.svg'

import Get_Started from './sections/components/Get_Started';
import About from './sections/components/About';
import Features from './sections/components/Features';
import Footer from '../../components/footer/components/Footer'

export default function Landing_Page() {
    return (
        <div className='landing-page-container'>

            <Get_Started />

            <About id={'about'} />

            <Features id={'features'} />

            <Footer />

        </div>
    )
}
