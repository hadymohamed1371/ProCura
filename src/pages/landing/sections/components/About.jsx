import React from 'react'

import '../stylesheets/About.css'

import Section from '../../../../components/section/Section'
import About_Photo from "../../../../assets/images/About_Photo.png"
import About_image from "../../../../assets/images/About_image.png"
export default function About({id}) {
    return (
        <div id={id}>
            {/* <div className="about-container">

    <div className="about-image">
        <img src={About_Photo} alt="About ProCura" />
    </div>

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

</div> */}

<div className="about-container">

 

    {/* Right Side - Content */}
    <div className="about-content">

        <div className="about-heading">
            <p className="about-label">ABOUT PROCURA</p>

            <h2>Empowering Proactive Healthcare Through Smarter Insights.</h2>

            <p className="about-description">
               Managing your health shouldn't be complicated. ProCura brings health tracking,
                vital signs monitoring, and health risk prediction together in one intuitive platform.
                From monitoring blood pressure and heart rate to tracking blood glucose levels,
               ProCura transforms your health data into clear visual insights, helping you understand your health,
                recognize patterns, and make informed decisions.
            </p>
           
        </div>

        <div className="about-features">
            <div className="feature-card">Monitor Your Health</div>
            <div className="feature-card">Early Awareness</div>
            <div className="feature-card">Health Tracking</div>
            <div className="feature-card">Understand Your Data</div>
        </div>

    </div>
   {/* Left Side - Image + Floating Cards */}
    <div className="about-image">

        <img
            src={About_image}
            alt="ProCura Health Dashboard"
            className="about-main-image"
        />

        {/* Top Left Card */}
        <div className="floating-card card-top-left">
            <div className="floating-icon blue-icon">
                <span>↗</span>
            </div>

            <div>
                <h4>Real-Time Monitoring</h4>
                <p>Synced across devices</p>
            </div>
        </div>

        {/* Top Right Card */}
        <div className="floating-card card-top-right">
            <div className="floating-icon green-icon">
                <span>✓</span>
            </div>

            <div>
                <h4>99.9% Data Accuracy</h4>
                <p>Clinical-grade tracking</p>
            </div>
        </div>

        {/* Bottom Left Card */}
        <div className="floating-card card-bottom-left">
            <div className="floating-icon purple-icon">
                <span>▤</span>
            </div>

            <div>
                <h4>Doctor-Ready Reports</h4>
                <p>1-click PDF export</p>
            </div>
        </div>

    </div>
</div>
        </div>
    )
}
