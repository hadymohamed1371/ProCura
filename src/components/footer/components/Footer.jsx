import React from 'react'

import '../stylesheet/Footer.css'
import ProCura_logo from '../../../assets/logos/Procura_Logo.svg'

export default function Footer() {

    return (
        <footer className="footer">

            <div className="footer-container">

               
                <div className="footer-about">

                    <img src={ProCura_logo} alt="ProCura Logo" />

                    <p>
                        Your health, better understood.
                        <br />
                        Monitor your health, discover
                        insights, and take a step toward a
                        healthier future.
                    </p>

                </div>


                
                <div className="footer-column">

                    <h3>Quick Links</h3>

                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#features">Features</a></li>
                    </ul>

                </div>


                
                <div className="footer-column">

                    <h3>Support</h3>

                    <ul>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="#help">Help Center</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                        <li><a href="#terms">Terms of Service</a></li>
                    </ul>

                </div>


              
                <div className="footer-column">

                    <h3>Our Features</h3>

                    <ul>
                        <li><a href="#risk">Health Risk Prediction</a></li>
                        <li><a href="#monitoring">Health Monitoring</a></li>
                        <li><a href="#insights">Personalized Insights</a></li>
                        <li><a href="#history">Health History</a></li>
                    </ul>

                </div>

            </div>


            
            <div className="footer-bottom">

                <p>
                    © 2026 ProCura. All rights reserved.
                </p>

            </div>

        </footer>
    )
}