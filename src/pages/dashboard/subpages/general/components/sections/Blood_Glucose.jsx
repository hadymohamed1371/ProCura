import React from 'react'

import '../../../../Dashboard.css'

import Section from '../../../../../../components/section/Section'
import Vital from '../../../../../../components/vital/components/Vital'

import Blood_Glucose_icon from '../../../../../../assets/icons/Blood_Glucose_icon.svg'
import Blood_Glucose_Card_Curve from '../../../../../../assets/images/Blood_Glucose_Card_Curve.svg'

export default function Blood_Glucose() {
    return (
        
        <Section
        title="Blood Glucose"
        logo={Blood_Glucose_icon}
        positiveBadgeContent="Normal"
        curve={Blood_Glucose_Card_Curve}
        >
            <Vital 
            value={"100"}
            unit={"mg/dL"}
            normalMin={"80"}
            normalMax={"140"}
            />
        </Section>

    )
}
