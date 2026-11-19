import React from 'react'

import Section from '../../../components/Section'
import Vital from '../../../components/Vital'
import Blood_Pressure_icon from '../../../assets/icons/Blood_Pressure_icon.svg'
import Blood_Pressure_Card_Curve from '../../../assets/images/Blood_Pressure_Card_Curve.svg'

export default function Blood_Pressure() {
    return (
        
        <Section
        title="Blood Pressure"
        logo={Blood_Pressure_icon}
        positiveBadgeContent="Normal"
        curve={Blood_Pressure_Card_Curve}
        >
            <Vital 
            value={"120/90"}
            unit={"mmHg"}
            normalRange={"90/60 - 120/80 mmHg"}
            />
        </Section>

    )
}
