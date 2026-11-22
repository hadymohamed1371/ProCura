import React from 'react'

import Section from '../../../components/section/Section'
import Button from '../../../components/button/Button'

export default function Health_Trends() {
    return (
        
        <Section
        title="Health Trends"
        >
            
            <Button
            buttonContent={"Normal Button"}
            appearance=''
            disabled={true}
            action={() => console.log("Nigga")}
            />

        </Section>

    )
}
