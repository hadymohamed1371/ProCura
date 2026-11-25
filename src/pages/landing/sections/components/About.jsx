import React from 'react'

import '../stylesheets/About.css'

import Section from '../../../../components/section/Section'
import About_Photo from "../../../../assets/images/About_Photo.png"

export default function About({id}) {
    return (
        <div id={id}>
            <div className="about-container">

    {/* Left Side - Image */}
    <div className="about-image">
        <img src={About_Photo} alt="About ProCura" />
    </div>

    {/* Right Side - Content */}
    <div className="about-content">

        <div className="about-heading">
            <p className="about-label">ABOUT PROCURA</p>

            <h2>A Smarter Way to Care for Your Health.</h2>

            <p className="about-description">
                Your health journey shouldn't be complicated.
                ProCura brings health monitoring and risk prediction
                together in one simple platform, helping you understand
                your health and take proactive steps toward a healthier future.
            </p>
        </div>

        <div className="about-features">
            <div className="feature-card">Monitor Your Health</div>
            <div className="feature-card">Early Awareness</div>
            <div className="feature-card">Health Tracking</div>
            <div className="feature-card">Understand Your Data</div>
        </div>

    </div>

</div>
        </div>
    )
}
