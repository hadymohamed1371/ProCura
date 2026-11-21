import React from 'react'

import Section from '../../../components/section/Section'
import Vital from '../../../components/vital/Vital'
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
            // normalMin={"90/60"}
            normalMax={"120/80"}
            />
        </Section>

    )
}
