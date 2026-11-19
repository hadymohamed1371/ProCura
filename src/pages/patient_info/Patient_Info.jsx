import React from 'react'

import './Patient_Info.css'
import Section from '../../components/Section'
import Head_Title from '../../components/Head_Title'
import Patient_Info_logo from '../../assets/icons/Patient_Info_logo.svg'

export default function Patient_Info() {
  return (
    <div className=''>

        <Head_Title 
        title="Patient Info"
        pageTitle={true}
        subtitle="Enter your health data."
        logo={Patient_Info_logo}
        />

        <Section 
        title="Cardiovacular"
        >

        </Section>
        
    </div>
  )
}
