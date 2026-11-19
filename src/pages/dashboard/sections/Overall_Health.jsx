import React from 'react'

import Section from '../../../components/Section'
import Vital from '../../../components/Vital'

export default function Overall_Health() {
    return (
        
        <Section
        title="Blood Pressure"
        // logo={}
        positiveBadgeContent="Normal"
        // curve={}
        >
            <Vital 
            value={"120/90"}
            unit={"mmHg"}
            normalRange={"90/60 - 120/80 mmHg"}
            />
        </Section>

    )
}
