import React from 'react'

import '../stylesheets/Features.css'

import Section from '../../../../components/section/Section'

import Dashboard_Nav_logo from '../../../../assets/icons/Dashboard_Nav_logo.svg'
import Heart_Rate_icon from '../../../../assets/icons/Heart_Rate_icon.svg'
import Patient_Info_Nav_logo from '../../../../assets/icons/Patient_Info_Nav_logo.svg'
import Blood_Pressure_icon from '../../../../assets/icons/Blood_Pressure_icon.svg'
import Profile_Nav_logo from '../../../../assets/icons/Profile_Nav_logo.svg'
import Settings_Nav_logo from '../../../../assets/icons/Settings_Nav_logo.svg'

const FEATURES = [
    {
        icon: Dashboard_Nav_logo,
        title: 'Health Dashboard',
        description: 'See your overall health and your key readings together in one clear, organized view.',
    },
    {
        icon: Heart_Rate_icon,
        title: 'Vitals Tracking',
        description: 'Keep track of your heart rate, blood pressure, and blood glucose and notice changes over time.',
    },
    {
        icon: Patient_Info_Nav_logo,
        title: 'Condition Tracking',
        description: 'Dedicated sections for diabetes, heart, liver, cardiovascular, and chronic obstructive pulmonary conditions.',
    },
    {
        icon: Blood_Pressure_icon,
        title: 'Early Risk Awareness',
        description: 'Enter your health information and get a clearer picture of your risks before they become a problem.',
    },
    {
        icon: Profile_Nav_logo,
        title: 'Personal Health Profile',
        description: 'Keep your personal details, medical background, and lifestyle habits in one place, and update them anytime.',
    },
    {
        icon: Settings_Nav_logo,
        title: 'Made Around You',
        description: 'Choose the measurement units, language, and theme that feel most comfortable for you.',
    },
]

export default function Features({ id }) {
    return (
        <div id={id}>
            <div className="features-container">

                <div className="features-heading">
                    <p className="features-label">FEATURES</p>

                    <h2>Everything You Need to Stay on Top of Your Health.</h2>

                    <p className="features-description">
                        From daily readings to condition-specific insights,
                        ProCura gives you simple tools to understand your health
                        and take the next step with confidence.
                    </p>
                </div>

                <div className="features-grid">
                    {FEATURES.map(({ icon, title, description }) => (
                        <div className="features-card" key={title}>
                            <Section
                                title={title}
                                subtitle={description}
                                logo={icon}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
