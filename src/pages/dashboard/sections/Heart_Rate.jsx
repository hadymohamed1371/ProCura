import React from 'react'

import Section from '../../../components/section/Section'
import Vital from '../../../components/vital/Vital'
import Heart_Rate_icon from '../../../assets/icons/Heart_Rate_icon.svg'
import Heart_Rate_Card_Curve from '../../../assets/images/Heart_Rate_Card_Curve.svg'

export default function Heart_Rate() {
    return (
        <Section
        title="Heart Rate"
        logo={Heart_Rate_icon}
        negativeBadgeContent="Abnormal"
        curve={Heart_Rate_Card_Curve}
        >
            <Vital 
            value={"50"}
            unit={"bpm"}
            normalMin={"60"}
            normalMax={"100"}
            />
        </Section>
    )
}
